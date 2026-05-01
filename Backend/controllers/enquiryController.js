import Enquiry from "../models/Enquiry.js";

export const createEnquiry = async (req, res) => {
  try {
    const { name, email, phone, message, propertyId } = req.body;

    const newEnquiry = new Enquiry({
      name,
      email,
      phone,
      message,
      propertyId,
    });

    const savedEnquiry = await newEnquiry.save();

    res.status(201).json({
      message: "Enquiry submitted successfully",
      enquiry: savedEnquiry,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to submit enquiry", error: error.message });
  }
};

export const getAllEnquiries = async (req, res) => {
  try {
    const enquiries = await Enquiry.find().populate("propertyId");
    res.status(200).json(enquiries);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch enquiries", error: error.message });
  }
};