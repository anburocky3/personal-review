"use client";

import { QRCodeSVG } from "qrcode.react";
import React from "react";

const QRCodePage = () => {
  return <QRCodeSVG value={window.location.href} size={300} />;
};

export default QRCodePage;
