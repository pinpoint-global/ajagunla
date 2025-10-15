import { Schema, model } from 'mongoose';
import { ROLE_SLUGS } from '../lib/seed/roles';

const roleSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      enum: ROLE_SLUGS,
      required: true,
      unique: true,
    },
    permissions: {
      type: [
        {
          name: {
            type: String,
            required: true,
          },
          description: {
            type: String,
            required: true,
          },
          slug: {
            type: String,
            required: true,
            index: true,
          },
          isRestricted: {
            type: Boolean,
            default: true,
          },
        },
      ],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

export const Role = model('Role', roleSchema);
