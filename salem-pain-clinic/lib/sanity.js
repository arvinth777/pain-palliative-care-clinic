import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

// Create the Sanity client
export const client = createClient({
  projectId: 'd0m8dwid', // Your Sanity project ID
  dataset: 'production', // Your dataset name
  apiVersion: '2023-05-01', // Use current date or latest API version
  useCdn: true, // Enable CDN for faster cached content (set to false for draft content)
});

// Image URL builder helper
const builder = imageUrlBuilder(client);

/**
 * Generate Sanity image URLs with transformations
 * @param {Object} source - Sanity image reference
 * @returns {Object} Image URL builder
 */
export const urlFor = (source) => {
  return builder.image(source);
};

// GROQ queries for reusable data fetching
export const queries = {
  // Get the doctor profile
  getDoctor: `*[_type == "doctor"][0]{
    _id,
    name,
    profileImage
  }`,

  // Get all website images
  getWebsiteImages: `*[_type == "websiteImages"][0]{
    _id,
    title,
    doctorPhoto,
    aboutHeroImage,
    medicalBackgroundImage,
    clinicLogo,
    clinicExterior,
    waitingArea,
    consultationRoom,
    ultrasoundMachine,
    painManagementEquipment,
    medicalEquipment1,
    medicalEquipment2,
    medicalEquipment3,
    treatmentRoom,
    receptionDesk,
    teamPhoto,
    certificatesWall,
    heroBackgroundImage
  }`,

  // Get clinic info
  getClinicInfo: `*[_type == "pageInfo"][0]{
    _id,
    clinicName,
    clinicHours,
    primaryPhone,
    secondaryPhone,
    email,
    address,
    googleMapsUrl
  }`,
};
