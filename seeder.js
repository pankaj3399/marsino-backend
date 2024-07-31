import Report from "./model/Report.js";
import { connectDB } from "./config/db.js";

const createDummyReports = async () => {
  // connectDB();
  const reports = [
    {
      car_insurance_id: "1",
      first_name: "John",
      last_name: "Doe",
      dob: "1990-01-01",
      street: "1234 Main St",
      city: "Los Angeles",
      postal_code: "90001",
      company_name: "ABC Insurance",
      company_street: "1234 Main St",
      company_city: "Los Angeles",
      company_postal_code: "90001",
    },
    {
      car_insurance_id: "2",
      first_name: "Jane",
      last_name: "Doe",
      dob: "1995-01-01",
      street: "5678 Main St",
      city: "Los Angeles",
      postal_code: "90001",
      company_name: "XYZ Insurance",
      company_street: "5678 Main St",
      company_city: "Los Angeles",
      company_postal_code: "90001",
    },
  ];

  try {
    for (let i = 1; i <= 20; i++) {
      console.log(`Creating Report ${i}...`);
      if (i % 2 === 0) {
        const obj = {
          car_insurance_id: reports[0].car_insurance_id + `${i}`,
          first_name: reports[0].first_name + `${i}`,
          last_name: reports[0].last_name,
          dob: reports[0].dob,
          street: reports[0].street,
          city: reports[0].city,
          postal_code: reports[0].postal_code,
          company_name: reports[0].company_name,
          company_street: reports[0].company_street,
          company_city: reports[0].company_city,
          company_postal_code: reports[0].company_postal_code,
        };
        await Report.create(obj);
      } else {
        const obj = {
          car_insurance_id: reports[1].car_insurance_id + `${i}`,
          first_name: reports[1].first_name + `${i}`,
          last_name: reports[1].last_name,
          dob: reports[1].dob,
          street: reports[1].street,
          city: reports[1].city,
          postal_code: reports[1].postal_code,
          company_name: reports[0].company_name,
          company_street: reports[0].company_street,
          company_city: reports[0].company_city,
          company_postal_code: reports[0].company_postal_code,
        };
        await Report.create(obj);
      }
    }
    process.exit(0);
  } catch (error) {
    console.log(error);
  }
};

createDummyReports();
