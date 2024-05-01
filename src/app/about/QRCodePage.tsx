"use client";

import { QRCodeSVG } from "qrcode.react";
import React from "react";

const QRCodePage = () => {
  return (
    <QRCodeSVG
      value="https://anbuselvan-annamalai.vercel.app/about"
      size={300}
    />
  );
};

export default QRCodePage;
