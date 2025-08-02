import formModel from "../models/form.js";

// Controller to handle form submission
export const FormData = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const form = await formModel.create({ name, email, message });
    console.log("Form submitted successfully:", form);

    return res.status(201).json({
      message: "Form successfully submitted",
      data: form,
    });

  } catch (error) {
    console.error("Error during form submission in controller:", error);

    return res.status(500).json({
      message: "Error during form submission",
      error: error.message,
    });
  }
};

// Controller to fetch all submitted forms
export const AllData = async (req, res) => {
  try {
    const data = await formModel.find();

    if (!data || data.length === 0) {
      console.log("No form data found.");
      return res.status(404).json({ message: "No form data found." });
    }

    return res.status(200).json({ message: "Data fetched successfully", data });

  } catch (error) {
    console.error("Error fetching form data:", error);

    return res.status(500).json({message: "Error fetching form data",error: error.message,
    });
  }
};
