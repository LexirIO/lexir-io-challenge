import FormInput from "@components/FormInput";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import editIcon from "../assets/pen-icon.svg";
import fileUpload from "../assets/file-upload.svg";
import MyAccountSidebar from "@components/Layout/MyAccountSidebar";

import "react-phone-input-2/lib/style.css";
import Image from "next/image";



const Home = () => {
  const [formValue, setFormValue] = useState({
    email: "jlalvesdesousa@lupum.com",
    password: "",
    firstName: "Leandro",
    lastName: "",
    phoneNumber: "",
    businessName: "Lupus",
    companyAddress: "Agras Street 8798, 4000-458 Porto, Portugal ",
    companyEmail: "jlalvesdesousa@lupum.com",
    companyNumber: "",
    companyContact: "",
  }); // hold state values 

  const [phone, setPhone] = useState("");
  const [selectedFile, setSelectedFile] = useState<File>();

  // Handle change for all text related input 
  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    setFormValue((prev) => ({ ...prev, [name]: value }));

  //handle change for file upload
  const handleSelectedFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;

    if (!fileList) return;

    setSelectedFile(fileList[0]);
  };
  
  return (
    <section className="md:flex">
      <MyAccountSidebar />

        {/* Account Information */}
      <section className="min-h-screen md:container px-14 mx-auto pb-14">
        
          <div className="flex justify-between my-10">
            <header>
              <h2 className="h2-text">Account Information</h2>  
            </header>
            <button className="flex">
              <span className="mr-3">
                <Image src={editIcon.src} alt="edit" />
              </span>
              Edit
            </button>
          </div>

          {/* Account information form  for user */}
        <form action="" method="post" encType="multipart/form-data">
          <FormInput
            name="email"
            label="Email"
            value={formValue.email}
            className={`md:w-1/2 w-full input placeholder-blueGray-300 text-blueGray-600 ${formValue.email === "" && "shadow" }`}
            placeholder="johndoe@mail.com"
            onChange={handleChange}
            disabled={true}
          />

          <FormInput
            name="password"
            type="password"
            label="Password"
            value={formValue.password}
            className={`input md:w-1/2 w-full  placeholder-blueGray-300 text-blueGray-600 ${formValue.password === "" && "shadow"}`}
            placeholder="***********"
            onChange={handleChange}
          />

          {/* Personal Information */}
          <section>
            <h2 className="my-5 h2-text">Personal Information</h2>
            <section className="md:flex gap-4 mb-3">
              <div className="w-full">
                <FormInput
                  name="firstName"
                  label="First Name"
                  value={formValue.firstName}
                  className="input w-full  placeholder-blueGray-300 text-blueGray-600 shadow"
                  placeholder="John"
                  onChange={handleChange}
                />
              </div>
              <div className="w-full">
                <FormInput
                  name="lastName"
                  label="Last Name"
                  value={formValue.lastName}
                  className="input w-full  placeholder-blueGray-300 text-blueGray-600 shadow"
                  placeholder="Doe"
                  onChange={handleChange}
                />
              </div>
            </section>
            
            <div className="mb-3">
              <label
                htmlFor="phoneNumber"
                className="block text-blueGray-600 text-xs font-bold mb-2"
              >
                Phone Number
              </label>

              <PhoneInput
                country={"pt"}
                value={phone}
                inputProps={{
                  name: "phoneNumber",
                }}
                inputClass="phone-input-width"
                onChange={(phone) => setPhone(phone)}
              />
            </div>
          </section>


          {/* Company Profile */}
          <section>
            <header>
              <h2 className="my-5 h2-text">Company Information</h2>
            </header>

            <div className="md:flex gap-4 mb-3">
              <div className="w-full">
                <FormInput
                  name="businessName"
                  label="Business Name"
                  value={formValue.businessName}
                  className={`w-full input placeholder-blueGray-300 text-blueGray-600 ${formValue.businessName === "" && "shadow"}`}
                  onChange={handleChange}
                  disabled = {true}
                />
              </div>
              <div className="w-full">
                <FormInput
                  name="businessName"
                  label="Company Address"
                  value={formValue.companyAddress}
                  className="w-full input placeholder-blueGray-300 text-blueGray-600 shadow"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="md:flex gap-4 mb-3">
              <div className="w-full">
                <FormInput
                  name="companyEmail"
                  label="Company Email"
                  value={formValue.companyEmail}
                  className="w-full input placeholder-blueGray-300 text-blueGray-600 shadow"
                  placeholder="example@mail.com"
                  onChange={handleChange}
                />
              </div>
              <div className="w-full">
                <FormInput
                  name="phone Number"
                  label="Phone Number"
                  value={formValue.companyContact}
                  className="w-full input placeholder-blueGray-300 text-blueGray-600 shadow"
                  placeholder="+351"
                  onChange={handleChange}
                />
              </div>
            </div>

            <FormInput
              name="companyNumber"
              label="Company Number"
              value={formValue.companyNumber}
              className="md:w-1/2 shadow w-full mr-3 input placeholder-blueGray-300 text-blueGray-600"
              onChange={handleChange}
            />

            <section>
              <header>
                <h2 className="block text-blueGray-600 text-xs font-bold mb-2">
                  Business Registration Number
                </h2>

                <p className="mb-5">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
              </header>
              
              {/* Upload file */}
              <div className="flex justify-center border border-gray-300 rounded-xl">
                <div className="flex flex-col md:p-9">
                  <div className="flex justify-center my-3">
                    <label htmlFor="icon-file-upload" className="text-center">
                      <Image src={fileUpload.src} alt="file-upload" />
                    </label>
                  </div>

                  <input
                    type="file"
                    name="file"
                    accept="application/pdf"
                    id="icon-file-upload"
                    className="hidden"
                    onChange={handleSelectedFile}
                  />
                  <span className="text-center">
                    Drag and drop files here to upload
                  </span>
                  <span className="text-gray-300 mb-3 text-center">
                    Only PDF files accepted
                  </span>
                </div>
              </div>
            </section>
          </section>
        </form>
      </section>
    </section>
  );
};

export default Home
