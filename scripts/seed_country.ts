import axios from "axios";
import { PrismaClient } from "@prisma/client";

type CountryData = {
  name: string;
  emoji: string;
  unicode: string;
  image: string;
};

const prisma = new PrismaClient();

async function seedCountries() {
  try {
    // Fetch data from the URL
    const response = await axios.get(
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/by-code.json"
    );
    const countriesData: Record<string, CountryData> = response.data;

    // Insert data into the Prisma database
    await prisma.$transaction(
      Object.entries(countriesData).map(([_emoji, country]) =>
        prisma.country.create({
          data: {
            name: country.name,
            flag: country.image,
          },
        })
      )
    );

    console.log("Seed successful!");
  } catch (error) {
    console.error("Error seeding countries:", error);
  } finally {
    // Disconnect Prisma client to avoid memory leaks
    await prisma.$disconnect();
  }
}

// Run the seed function
seedCountries();
