import React, { useState } from "react";
import { Popover, PopoverTrigger, PopoverContent, Button, Input } from "@nextui-org/react";

const Pop = () => {
  const backdrops = ["opaque", "blur", "transparent"];
  const [formData, setFormData] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
  });

  const handleInputChange = (e, inputName) => {
    setFormData({
      ...formData,
      [inputName]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any actions with the form data
    console.log(formData);
    // Reset the form or close the popover as needed
  };

  const content = (
    <PopoverContent className="w-[240px]">
      {(titleProps) => (
        <form onSubmit={handleSubmit}>
          <div className="px-1 py-2 w-full">
            <p className="text-small font-bold text-foreground" {...titleProps}>
              Dimensions
            </p>
            <div className="mt-2 flex border border-black flex-col gap-2 w-full">
              <Input
                className="border border-black"
                type="text"
                value={formData.input1}
                onChange={(e) => handleInputChange(e, "input1")}
              />
              <Input
                className="border border-black"
                type="text"
                value={formData.input2}
                onChange={(e) => handleInputChange(e, "input2")}
              />
              <Input
                className="border border-black"
                type="text"
                value={formData.input3}
                onChange={(e) => handleInputChange(e, "input3")}
              />
              <Input
                className="border border-black"
                type="text"
                value={formData.input4}
                onChange={(e) => handleInputChange(e, "input4")}
              />
              <Button type="submit">Submit</Button>
            </div>
          </div>
        </form>
      )}
    </PopoverContent>
  );

  return (
    <div className="flex flex-wrap gap-4">
      {backdrops.map((backdrop) => (
        <Popover
          key={backdrop}
          showArrow
          offset={10}
          placement="bottom"
          backdrop={backdrop}
        >
          <PopoverTrigger>
            <Button color="warning" variant="flat" className="capitalize">
              {backdrop}
            </Button>
          </PopoverTrigger>
          {content}
        </Popover>
      ))}
    </div>
  );
};

export default Pop;
