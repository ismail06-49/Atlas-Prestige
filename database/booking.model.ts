import mongoose, { Schema, Types } from "mongoose";
import Item from "./item.model";

export interface BookingDocument {
  itemId: Types.ObjectId;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

const validEmail = (value: string): boolean => {
  const [localPart] = value.split("@");
  return (
    !localPart.startsWith(".") &&
    !localPart.endsWith(".") &&
    !localPart.includes("..") &&
    /^[A-Z0-9.!#$%&'*+/=?^_`{|}~-]+@(?:[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?\.)+[A-Z]{2,63}$/i.test(
      value,
    )
  );
};

const bookingSchema = new Schema<BookingDocument>(
  {
    itemId: {
      type: Schema.Types.ObjectId,
      ref: "Item",
      required: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      validate: { validator: validEmail, message: "Email must be valid" },
    },
  },
  { timestamps: true },
);

bookingSchema.index({ itemId: 1 });

// Confirm the referenced item exists before persisting the booking.
bookingSchema.pre("save", async function () {
  const itemExists = await Item.exists({ _id: this.itemId });
  if (!itemExists) {
    throw new Error(`Item ${this.itemId.toString()} does not exist`);
  }
});

const Booking =
  mongoose.models.Booking ||
  mongoose.model<BookingDocument>("Booking", bookingSchema);

export default Booking;
