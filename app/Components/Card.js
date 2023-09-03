"use client";
import React, { useEffect, useState } from "react";
import book from "../../public/bookin (1).png";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
} from "@nextui-org/react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Cardskeleton from "./Cardskeleton";
import { BsGithub } from "react-icons/bs";

export default function App() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [data, setdata] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null); // State to track clicked item
  const [loading, setLoading] = useState();

  const selectedmodel = (index) => {
    setSelectedItem(data[index]);
    onOpen();
  };

  const getData = async () => {
    setLoading(true);
    const response = await fetch("/api/Resume");
    const resumedata = await response.json();
    setdata(resumedata);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {loading ? (
        <Cardskeleton />
      ) : (
        <>
          {data.map((value, index) => (
            <motion.div
              key={index}
              className="mx-auto"
              onClick={() => selectedmodel(index)}
              initial={{ opacity: 0.5, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1 }}
            >
              <Card className="w-80 md:w-80 lg:w-96 gradient h-[28rem] mb-8 mt-8 mx-auto ">
                <CardBody className="overflow-visible p-6 ">
                  <Image
                    width={350}
                    height={350}
                    alt={value?.project_title}
                    className="object-fill rounded-xl h-64 w-[100%]"
                    src={value?.project_image || book}
                  />
                </CardBody>
                <CardFooter className=" flex-col  items-start mx-6">
                  <div className="flex items-center align-middle gap-12 w-full">
                    <p className="uppercase tracking-widest text-xs font-medium md:font-thin  leading-3 text-[#f9004d]">
                      {value?.project_sub}
                    </p>
                    <small className="text-default-500 ml-12"></small>
                  </div>
                  <div>
                    <h4 className="text-3xl capitalize font-semibold mt-2 mb-4  p-2 mr-2 hover:text-[#f9004d] cursor-pointer transition-colors duration-300">
                      {value?.project_title}
                    </h4>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}

          {selectedItem && (
            <Modal
              size="4xl"
              isOpen={isOpen}
              onOpenChange={onOpenChange}
              className={{
                closeButton:
                  "hover:bg-red-500 hover:text-white  shadow-lg rounded-full",
              }}
            >
              <ModalContent>
                {(onClose) => (
                  <>
                    {/* <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader> */}
                    <ModalBody>
                      <div className="flex flex-col md:flex-row justify-between gap-8 items-start p-4 md:p-8">
                        <div className="lg:w-[40%] md:w-[50%] ">
                          <Image
                            width={150}
                            height={150}
                            objectFit="contain"
                            alt={selectedItem?.project_title}
                            className="object-fill rounded-xl h-60 w-96 md:h-96 md:w-96 "
                            src={selectedItem?.project_image || book}
                          />
                        </div>
                        <div className="lg:w-[50%] md:w-[50%]">
                          <p className="uppercase tracking-widest text-xs font-medium md:font-thin  leading-3 text-[#f9004d] mb-4">
                            {selectedItem?.project_sub}
                          </p>
                          <h4 className="text-3xl capitalize font-semibold mt-2 mb-4 hover:text-[#f9004d] cursor-pointer duration-400 transition-colors">
                            {selectedItem?.project_title}
                          </h4>
                          <p className="font-normal text-base text-[#3c3e41] mb-4">
                            {selectedItem?.project_desc}
                          </p>
                          <div className=" flex gap-8 justify-center item center mt-8">
                            <motion.div whileHover={{ y: -4 }}>
                              <button
                                onClick={onClose}
                                className=" hovericon transition-all duration-700 bg-transparent text-red-400   shadow-md p-3 rounded-md w-36  lg:w-52  md:w-44 "
                              >
                                Close
                              </button>
                            </motion.div>
                            <Link href={selectedItem?.project_link}>
                              <motion.div whileHover={{ y: -4 }}>
                                <button className=" hovericon transition-all duration-700 bg-transparent text-red-400   shadow-md p-3 rounded-md w-36 lg:w-52 md:w-44">
                                  Show project
                                </button>
                              </motion.div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </ModalBody>
                  </>
                )}
              </ModalContent>
            </Modal>
          )}
        </>
      )}
    </>
  );
}
