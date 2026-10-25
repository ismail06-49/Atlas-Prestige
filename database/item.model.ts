import mongoose, { Schema } from "mongoose";

export interface ItemDocument {
  title: string;
  slug: string;
  description: string;
  image: string;
  price: string;
  type: string;
  date: string;
  time: string;
  createdAt: Date;
  updatedAt: Date;
}

const nonEmptyString = {
  validator: (value: string) => value.trim().length > 0,
  message: "This field cannot be empty",
};

function slugify(title: string): string {
  return title
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const itemSchema = new Schema<ItemDocument>(
  {
    title: { type: String, required: true, trim: true, validate: nonEmptyString },
    slug: { type: String, required: true, trim: true },
    description: {
      type: String,
      required: true,
      trim: true,
      validate: nonEmptyString,
    },
    image: { type: String, required: true, trim: true, validate: nonEmptyString },
    price: { type: String, required: true, trim: true, validate: nonEmptyString },
    type: { type: String, required: true, trim: true, validate: nonEmptyString },
    date: {
      type: String,
      required: true,
      default: () => new Date().toISOString(),
      validate: {
        validator: (value: string) => !Number.isNaN(Date.parse(value)),
        message: "Date must be a valid date",
      },
    },
    time: { type: String, required: false, trim: true },
  },
  { timestamps: true },
);

itemSchema.index({ slug: 1 }, { unique: true });

// Populate a new slug before required-field validation; title changes are handled on save.
itemSchema.pre("validate", function () {
  if (!this.slug && this.title?.trim()) {
    this.slug = slugify(this.title);
  }
});

itemSchema.pre("save", function () {
  if (this.isModified("title")) {
    // Normalize the title into a URL-friendly slug only when the title changes.
    const slug = slugify(this.title);
    if (!slug) {
      throw new Error("Title must contain letters or numbers to generate a slug");
    }
    this.slug = slug;
  }

  // Store dates as UTC ISO strings and times as zero-padded 24-hour UTC values.
  const parsedDate = new Date(this.date);
  if (Number.isNaN(parsedDate.getTime())) {
    throw new Error("Date must be a valid date");
  }
  this.date = parsedDate.toISOString();

  if (!this.time) {
    this.time = this.date.slice(11, 16);
  } else {
    const match = /^(\d{1,2}):([0-5]\d)(?::[0-5]\d)?$/.exec(this.time);
    if (!match || Number(match[1]) > 23) {
      throw new Error("Time must be a valid 24-hour time");
    }
    this.time = `${match[1].padStart(2, "0")}:${match[2]}`;
  }
});

const Item =
  mongoose.models.Item ||
  mongoose.model<ItemDocument>("Item", itemSchema);

export default Item;
