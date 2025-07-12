import {
  EXPO_PUBLIC_APPWRITE_ENDPOINT,
  EXPO_PUBLIC_APPWRITE_PROJECT_ID,
  PLATFORM,
} from "@/config/env.config";
import { Account, Avatars, Client } from "react-native-appwrite";

const client = new Client()
  .setProject(EXPO_PUBLIC_APPWRITE_PROJECT_ID)
  .setEndpoint(EXPO_PUBLIC_APPWRITE_ENDPOINT)
  .setPlatform(PLATFORM);

export const account = new Account(client);

export const avatar = new Avatars(client);
