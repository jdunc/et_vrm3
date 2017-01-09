'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');
var fs = require('fs');
var pdf = require('html-pdf');
var options = { format: 'Letter' };
var path = require("path");


var api_key = 'key-55a1b24b3aa69a31e3544066d9c88941';
var domain = 'etsimple.com';
const mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});


router.post('/email', (req, res, next) =>{
console.log('sent email');
var today = new Date();
var appointment = tConvert(req.body['appointment-time']);
var $html = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head>

  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta name="viewport" content="width=device-width">
  <meta http-equiv="X-UA-Compatible" content="IE=9; IE=8; IE=7; IE=EDGE">
  <title>Template Base</title>


  <style id="media-query">
    /* Client-specific Styles & Reset */
    #outlook a {
        padding: 0;
    }

    /* .ExternalClass applies to Outlook.com (the artist formerly known as Hotmail) */
    .ExternalClass {
        width: 100%;
    }

    .ExternalClass,
    .ExternalClass p,
    .ExternalClass span,
    .ExternalClass font,
    .ExternalClass td,
    .ExternalClass div {
        line-height: 100%;
    }

    #backgroundTable {
        margin: 0;
        padding: 0;
        width: 100% !important;
        line-height: 100% !important;
    }

    /* Buttons */
    .button a {
        display: inline-block;
        text-decoration: none;
        -webkit-text-size-adjust: none;
        text-align: center;
    }

    .button a div {
        text-align: center !important;
    }

    /* Outlook First */
    body.outlook p {
        display: inline !important;
    }

    a[x-apple-data-detectors] {
  color: inherit !important;
  text-decoration: none !important;
  font-size: inherit !important;
  font-family: inherit !important;
  font-weight: inherit !important;
  line-height: inherit !important; }

    #patientInfo{
      border-spacing: 0;border-collapse: collapse;vertical-align: top;max-width: 1500px;margin: 0 auto;text-align: inherit
    }
    #patientInfo tr{
      vertical-align: top;
    }
    #patientInfo tr td{
      word-break: break-word;border-collapse: collapse !important;vertical-align: top;padding-top: 10px;padding-right: 10px;padding-bottom: 10px;padding-left: 10px
    }
    h5{
      color:#555555;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif; margin: 0;text-align: right;font-size: 8px; line-height: 8px;
    }
    .td1{
      width:25%;
    }
    td p {
      color:#555555;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif; margin: 0;text-align: left;font-size: 8px; line-height: 8px;
    }
  </style>
</head>
<body style="width: 100% !important;min-width: 100%;-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100% !important;margin: 0;padding: 0;background-color: #FFFFFF">
  <table cellpadding="0" cellspacing="0" width="100%" class="body" border="0" style="border-spacing: 0;border-collapse: collapse;vertical-align: top;height: 100%;width: 100%;table-layout: fixed">
      <tbody><tr style="vertical-align: top">
          <td class="center" align="center" valign="top" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;text-align: center;background-color: #FFFFFF">

              <table cellpadding="0" cellspacing="0" align="center" width="100%" border="0" style="border-spacing: 0;border-collapse: collapse;vertical-align: top">
                <tbody><tr style="vertical-align: top">
                  <td width="100%" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;background-color: white">
                    <!--[if gte mso 9]>
                    <table id="outlookholder" border="0" cellspacing="0" cellpadding="0" align="center"><tr><td>
                    <![endif]-->
                    <!--[if (IE)]>
                    <table width="1500" align="center" cellpadding="0" cellspacing="0" border="0">
                        <tr>
                            <td>
                    <![endif]-->
                    <table cellpadding="0" cellspacing="0" align="center" width="100%" border="0" class="container" style="border-spacing: 0;border-collapse: collapse;vertical-align: top;max-width: 1500px;margin: 0 auto;text-align: inherit"><tbody><tr style="vertical-align: top"><td width="100%" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top"><table cellpadding="0" cellspacing="0" width="100%" bgcolor="transparent" class="block-grid two-up" style="border-spacing: 0;border-collapse: collapse;vertical-align: top;width: 100%;max-width: 1500px;color: #333;background-color: transparent"><tbody><tr style="vertical-align: top"><td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;background-color: transparent;text-align: center;font-size: 0"><!--[if (gte mso 9)|(IE)]><table width="100%" align="center" bgcolor="transparent" cellpadding="0" cellspacing="0" border="0"><tr><![endif]--><!--[if (gte mso 9)|(IE)]><td valign="top" width="500" style="width:500px;"><![endif]--><div class="col num6" style="display: inline-block;vertical-align: top;text-align: center;width: 500px"><table cellpadding="0" cellspacing="0" align="center" width="100%" border="0" style="border-spacing: 0;border-collapse: collapse;vertical-align: top"><tbody><tr style="vertical-align: top"><td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;background-color: transparent;padding-top: 20px;padding-right: 0px;padding-bottom: 5px;padding-left: 0px;border-top: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-left: 0px solid transparent"><table cellpadding="0" cellspacing="0" width="100%" border="0" style="border-spacing: 0;border-collapse: collapse;vertical-align: top">
    <tbody><tr style="vertical-align: top">
        <td align="center" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;width: 100%;padding-top: 0px;padding-right: 0px;padding-bottom: 0px;padding-left: 0px">
            <div align="center" style="font-size:12px">
                <a href="" target="_blank">
                    <img class="center fullwidth" align="center" border="0" src="https://static.wixstatic.com/media/fa8c13_5bb9ed75a72c4aec9b550943d76b9ba9.png/v1/crop/x_73,y_280,w_1513,h_931/fill/w_922,h_564,al_c,usm_0.66_1.00_0.01/fa8c13_5bb9ed75a72c4aec9b550943d76b9ba9.png" alt="Image" title="Image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block;border: none;height: auto;line-height: 100%;margin: 0 auto;float: none;width: 100% !important;max-width: 250px" width="250">
                </a>

            </div>
        </td>
    </tr>
</tbody></table>
                    <table id="patientInfo" cellpadding="0" cellspacing="0" align="center" width="100%" border="0" class="container" style="border-spacing: 0;border-collapse: collapse;vertical-align: top;max-width: 1500px;margin: 0 auto;text-align: inherit">
                    <tbody>
                    <tr><td class="td1"><h5>Child Name:</h5></td><td><p>${req.body['child-first-name']} ${req.body['child-last-name']}</p></td></tr>
                    <tr><td class="td1"><h5>Parent Name:</h5></td><td><p>${req.body['parent-name']}</p></td></tr>
                    <tr><td class="td1"><h5>Appointment Time:</h5></td><td><p>${appointment}</p></td></tr>
                    <tr><td class="td1"><h5>Stress Rating:</h5></td><td><p>${req.body['stress-rating']}</p></td></tr>
                    <tr><td class="td1"><h5>Medications:</h5></td><td><p>${req.body['medication']}</p></td></tr>
                    <tr><td class="td1"><h5>Medication Change:</h5></td><td><p>${req.body['medication-change']}</p></td></tr>
                    <tr><td class="td1"><h5>School Changes:</h5></td><td><p>${req.body['school']}</p></td></tr>
                    <tr><td class="td1"><h5>Home Changes:</h5></td><td><p>${req.body['home']}</p></td></tr>
                    <tr><td class="td1"><h5>Environmental Changes:</h5></td><td><p>${req.body['environmental']}</p></td></tr>
                    <tr><td class="td1"><h5>Physical Changes:</h5></td><td><p>${req.body['physical']}</p></td></tr>
                    <tr><td class="td1"><h5>Positive Notes:</h5></td><td><p>${req.body['positive']}</p></td></tr>
                    <tr><td class="td1"><h5>Questions and Concerns:</h5></td><td><p>${req.body['questions']}</p></td></tr>
                  </tbody>
                    </table>


</body></html>
`;
pdf.create($html, options).toFile(`./routes/tmpPDF/${req.body['child-last-name']}_${req.body['child-first-name']}_${today}.pdf`, function(err, res) {
  if (err) return console.log(err);
  console.log(res); // { filename: '/app/businesscard.pdf' }

var filepath = path.join(__dirname, `./tmpPDF/${req.body['child-last-name']}_${req.body['child-first-name']}_${today}.pdf`);
var $file = fs.readFileSync(filepath);

  var data = {
    'from': 'et.visitor@etsimple.com',
    'to': 'shahzadkhan3iii7@gmail.com',
    'subject': `Your ${appointment} Has Arrived!`,
    attachment: filepath,
    'html': `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head>

      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      <meta name="viewport" content="width=device-width">
      <meta http-equiv="X-UA-Compatible" content="IE=9; IE=8; IE=7; IE=EDGE">
      <title>Template Base</title>


      <style id="media-query">
        /* Client-specific Styles & Reset */
        #outlook a {
            padding: 0;
        }

        /* .ExternalClass applies to Outlook.com (the artist formerly known as Hotmail) */
        .ExternalClass {
            width: 100%;
        }

        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
            line-height: 100%;
        }

        #backgroundTable {
            margin: 0;
            padding: 0;
            width: 100% !important;
            line-height: 100% !important;
        }

        /* Buttons */
        .button a {
            display: inline-block;
            text-decoration: none;
            -webkit-text-size-adjust: none;
            text-align: center;
        }

        .button a div {
            text-align: center !important;
        }

        /* Outlook First */
        body.outlook p {
            display: inline !important;
        }

        a[x-apple-data-detectors] {
      color: inherit !important;
      text-decoration: none !important;
      font-size: inherit !important;
      font-family: inherit !important;
      font-weight: inherit !important;
      line-height: inherit !important; }

    /*  Media Queries */
    @media only screen and (max-width: 500px) {
      table[class="body"] img {
        height: auto !important;
        width: 100% !important; }
      table[class="body"] img.fullwidth {
        max-width: 100% !important; }
      table[class="body"] center {
        min-width: 0 !important; }
      table[class="body"] .container {
        width: 95% !important; }
      table[class="body"] .row {
        width: 100% !important;
        display: block !important; }
      table[class="body"] .wrapper {
        display: block !important;
        padding-right: 0 !important; }
      table[class="body"] .columns, table[class="body"] .column {
        table-layout: fixed !important;
        float: none !important;
        width: 100% !important;
        padding-right: 0px !important;
        padding-left: 0px !important;
        display: block !important; }
      table[class="body"] .wrapper.first .columns, table[class="body"] .wrapper.first .column {
        display: table !important; }
      table[class="body"] table.columns td, table[class="body"] table.column td, .col {
        width: 100% !important; }
      table[class="body"] table.columns td.expander {
        width: 1px !important; }
      table[class="body"] .right-text-pad, table[class="body"] .text-pad-right {
        padding-left: 10px !important; }
      table[class="body"] .left-text-pad, table[class="body"] .text-pad-left {
        padding-right: 10px !important; }
      table[class="body"] .hide-for-small, table[class="body"] .show-for-desktop {
        display: none !important; }
      table[class="body"] .show-for-small, table[class="body"] .hide-for-desktop {
        display: inherit !important; }
      .mixed-two-up .col {
        width: 100% !important; } }
     @media screen and (max-width: 500px) {
          div[class="col"] {
              width: 100% !important;
          }
        }

        @media screen and (min-width: 501px) {
          table[class="container"] {
              width: 500px !important;
          }
        }
        #patientInfo{
          border-spacing: 0;border-collapse: collapse;vertical-align: top;max-width: 500px;margin: 0 auto;text-align: inherit
        }
        #patientInfo tr{
          vertical-align: top;
        }
        #patientInfo tr td{
          word-break: break-word;border-collapse: collapse !important;vertical-align: top;padding-top: 10px;padding-right: 10px;padding-bottom: 10px;padding-left: 10px
        }
        h5{
          color:#555555;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif; margin: 0;text-align: right;font-size: 24px; line-height: 28px;
        }
        .td1{
          width:50%;
        }
        td p {
          color:#555555;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif; margin: 0;text-align: left;font-size: 24px; line-height: 28px;
        }
      </style>
    </head>
    <body style="width: 100% !important;min-width: 100%;-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100% !important;margin: 0;padding: 0;background-color: #FFFFFF">
      <table cellpadding="0" cellspacing="0" width="100%" class="body" border="0" style="border-spacing: 0;border-collapse: collapse;vertical-align: top;height: 100%;width: 100%;table-layout: fixed">
          <tbody><tr style="vertical-align: top">
              <td class="center" align="center" valign="top" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;text-align: center;background-color: #FFFFFF">

                  <table cellpadding="0" cellspacing="0" align="center" width="100%" border="0" style="border-spacing: 0;border-collapse: collapse;vertical-align: top">
                    <tbody><tr style="vertical-align: top">
                      <td width="100%" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;background-color: #228DA8">
                        <!--[if gte mso 9]>
                        <table id="outlookholder" border="0" cellspacing="0" cellpadding="0" align="center"><tr><td>
                        <![endif]-->
                        <!--[if (IE)]>
                        <table width="500" align="center" cellpadding="0" cellspacing="0" border="0">
                            <tr>
                                <td>
                        <![endif]-->
                        <table cellpadding="0" cellspacing="0" align="center" width="100%" border="0" class="container" style="border-spacing: 0;border-collapse: collapse;vertical-align: top;max-width: 500px;margin: 0 auto;text-align: inherit"><tbody><tr style="vertical-align: top"><td width="100%" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top"><table cellpadding="0" cellspacing="0" width="100%" bgcolor="transparent" class="block-grid two-up" style="border-spacing: 0;border-collapse: collapse;vertical-align: top;width: 100%;max-width: 500px;color: #333;background-color: transparent"><tbody><tr style="vertical-align: top"><td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;background-color: transparent;text-align: center;font-size: 0"><!--[if (gte mso 9)|(IE)]><table width="100%" align="center" bgcolor="transparent" cellpadding="0" cellspacing="0" border="0"><tr><![endif]--><!--[if (gte mso 9)|(IE)]><td valign="top" width="250" style="width:250px;"><![endif]--><div class="col num6" style="display: inline-block;vertical-align: top;text-align: center;width: 250px"><table cellpadding="0" cellspacing="0" align="center" width="100%" border="0" style="border-spacing: 0;border-collapse: collapse;vertical-align: top"><tbody><tr style="vertical-align: top"><td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;background-color: transparent;padding-top: 20px;padding-right: 0px;padding-bottom: 5px;padding-left: 0px;border-top: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-left: 0px solid transparent"><table cellpadding="0" cellspacing="0" width="100%" border="0" style="border-spacing: 0;border-collapse: collapse;vertical-align: top">
        <tbody><tr style="vertical-align: top">
            <td align="center" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;width: 100%;padding-top: 0px;padding-right: 0px;padding-bottom: 0px;padding-left: 0px">
                <div align="center" style="font-size:12px">
                    <a href="" target="_blank">
                        <img class="center fullwidth" align="center" border="0" src="https://static.wixstatic.com/media/fa8c13_5bb9ed75a72c4aec9b550943d76b9ba9.png/v1/crop/x_73,y_280,w_1513,h_931/fill/w_922,h_564,al_c,usm_0.66_1.00_0.01/fa8c13_5bb9ed75a72c4aec9b550943d76b9ba9.png" alt="Image" title="Image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block;border: none;height: auto;line-height: 100%;margin: 0 auto;float: none;width: 100% !important;max-width: 250px" width="250">
                    </a>

                </div>
            </td>
        </tr>
    </tbody></table>
    </td></tr></tbody></table></div><!--[if (gte mso 9)|(IE)]></td><![endif]--><!--[if (gte mso 9)|(IE)]><td valign="top" width="250" style="width:250px;"><![endif]--><div class="col num6" style="display: inline-block;vertical-align: top;text-align: center;width: 250px"><table cellpadding="0" cellspacing="0" align="center" width="100%" border="0" style="border-spacing: 0;border-collapse: collapse;vertical-align: top"><tbody><tr style="vertical-align: top"><td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;background-color: transparent;padding-top: 20px;padding-right: 0px;padding-bottom: 20px;padding-left: 0px;border-top: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-left: 0px solid transparent"><table cellpadding="0" cellspacing="0" width="100%" style="border-spacing: 0;border-collapse: collapse;vertical-align: top">
      <tbody><tr style="vertical-align: top">
        <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;padding-top: 20px;padding-right: 10px;padding-bottom: 20px;padding-left: 10px">
          <div style="color:#7BC4D6;line-height:150%;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;">
          	<div style="font-size:12px;line-height:18px;color:#7BC4D6;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;text-align:left;"><div style="text-align: right; line-height:18px; font-size:12px;"><span style="font-size: 24px; line-height: 36px;"><strong><span style="line-height: 36px; font-size: 24px;">Uplift Counseling Services&nbsp;</span></strong></span></div></div>
          </div>
        </td>
      </tr>
    </tbody></table>
    </td></tr></tbody></table></div><!--[if (gte mso 9)|(IE)]></td><![endif]--><!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]--></td></tr></tbody></table></td></tr></tbody></table>
                        <!--[if mso]>
                        </td></tr></table>
                        <![endif]-->
                        <!--[if (IE)]>
                        </td></tr></table>
                        <![endif]-->
                      </td>
                    </tr>
                  </tbody></table>
                  <table cellpadding="0" cellspacing="0" align="center" width="100%" border="0" style="border-spacing: 0;border-collapse: collapse;vertical-align: top">
                    <tbody><tr style="vertical-align: top">
                      <td width="100%" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;background-color: #228DA8">
                        <!--[if gte mso 9]>
                        <table id="outlookholder" border="0" cellspacing="0" cellpadding="0" align="center"><tr><td>
                        <![endif]-->
                        <!--[if (IE)]>
                        <table width="500" align="center" cellpadding="0" cellspacing="0" border="0">
                            <tr>
                                <td>
                        <![endif]-->
                        <table cellpadding="0" cellspacing="0" align="center" width="100%" border="0" class="container" style="border-spacing: 0;border-collapse: collapse;vertical-align: top;max-width: 500px;margin: 0 auto;text-align: inherit"><tbody><tr style="vertical-align: top"><td width="100%" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top"><table cellpadding="0" cellspacing="0" width="100%" bgcolor="transparent" class="block-grid " style="border-spacing: 0;border-collapse: collapse;vertical-align: top;width: 100%;max-width: 500px;color: #000000;background-color: transparent"><tbody><tr style="vertical-align: top"><td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;background-color: transparent;text-align: center;font-size: 0"><!--[if (gte mso 9)|(IE)]><table width="100%" align="center" bgcolor="transparent" cellpadding="0" cellspacing="0" border="0"><tr><![endif]--><!--[if (gte mso 9)|(IE)]><td valign="top" width="500" style="width:500px;"><![endif]--><div class="col num12" style="display: inline-block;vertical-align: top;width: 100%"><table cellpadding="0" cellspacing="0" align="center" width="100%" border="0" style="border-spacing: 0;border-collapse: collapse;vertical-align: top"><tbody><tr style="vertical-align: top"><td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;background-color: transparent;padding-top: 5px;padding-right: 0px;padding-bottom: 5px;padding-left: 0px;border-top: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-left: 0px solid transparent"><table cellpadding="0" cellspacing="0" width="100%" style="border-spacing: 0;border-collapse: collapse;vertical-align: top"><tbody><tr style="vertical-align: top"><td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 16px;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif"><div class="our-class"> </div></td></tr></tbody></table>
    </td></tr></tbody></table></div><!--[if (gte mso 9)|(IE)]></td><![endif]--><!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]--></td></tr></tbody></table></td></tr></tbody></table>
                        <!--[if mso]>
                        </td></tr></table>
                        <![endif]-->
                        <!--[if (IE)]>
                        </td></tr></table>
                        <![endif]-->
                      </td>
                    </tr>
                  </tbody></table>
                  <table cellpadding="0" cellspacing="0" align="center" width="100%" border="0" style="border-spacing: 0;border-collapse: collapse;vertical-align: top">
                    <tbody><tr style="vertical-align: top">
                      <td width="100%" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;background-color: #7BC4D6">
                        <!--[if gte mso 9]>
                        <table id="outlookholder" border="0" cellspacing="0" cellpadding="0" align="center"><tr><td>
                        <![endif]-->
                        <!--[if (IE)]>
                        <table width="500" align="center" cellpadding="0" cellspacing="0" border="0">
                            <tr>
                                <td>
                        <![endif]-->
                        <table cellpadding="0" cellspacing="0" align="center" width="100%" border="0" class="container" style="border-spacing: 0;border-collapse: collapse;vertical-align: top;max-width: 500px;margin: 0 auto;text-align: inherit"><tbody><tr style="vertical-align: top"><td width="100%" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top"><table cellpadding="0" cellspacing="0" width="100%" bgcolor="transparent" class="block-grid " style="border-spacing: 0;border-collapse: collapse;vertical-align: top;width: 100%;max-width: 500px;color: #000000;background-color: transparent"><tbody><tr style="vertical-align: top"><td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;background-color: transparent;text-align: center;font-size: 0"><!--[if (gte mso 9)|(IE)]><table width="100%" align="center" bgcolor="transparent" cellpadding="0" cellspacing="0" border="0"><tr><![endif]--><!--[if (gte mso 9)|(IE)]><td valign="top" width="500" style="width:500px;"><![endif]--><div class="col num12" style="display: inline-block;vertical-align: top;width: 100%"><table cellpadding="0" cellspacing="0" align="center" width="100%" border="0" style="border-spacing: 0;border-collapse: collapse;vertical-align: top"><tbody><tr style="vertical-align: top"><td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;background-color: transparent;padding-top: 0px;padding-right: 0px;padding-bottom: 0px;padding-left: 0px;border-top: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-left: 0px solid transparent"><table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" style="border-spacing: 0;border-collapse: collapse;vertical-align: top">
      <tbody><tr style="vertical-align: top">
        <td align="center" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;padding-top: 10px;padding-right: 10px;padding-bottom: 10px;padding-left: 10px">
          <div style="height: 10px;">
            <table align="center" border="0" cellspacing="0" style="border-spacing: 0;border-collapse: collapse;vertical-align: top;border-top: 10px solid transparent;width: 100%"><tbody><tr style="vertical-align: top"><td align="center" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top"></td></tr></tbody></table>
          </div>
        </td>
      </tr>
    </tbody></table>
    <table cellpadding="0" cellspacing="0" width="100%" style="border-spacing: 0;border-collapse: collapse;vertical-align: top">
      <tbody><tr style="vertical-align: top">
        <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;padding-top: 30px;padding-right: 0px;padding-bottom: 30px;padding-left: 0px">
          <div style="color:#228DA8;line-height:120%;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;">
          	<div style="font-size:12px;line-height:14px;color:#228DA8;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;text-align:left;"><p style="margin: 0;font-size: 14px;line-height: 17px;text-align: center"><strong><span style="font-size: 28px; line-height: 33px;" mce-data-marked="1">Your Client Has Arrived</span></strong></p></div>
          </div>
        </td>
      </tr>
    </tbody></table>
    <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" style="border-spacing: 0;border-collapse: collapse;vertical-align: top">
      <tbody><tr style="vertical-align: top">
        <td align="center" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;padding-top: 10px;padding-right: 10px;padding-bottom: 10px;padding-left: 10px">
          <div style="height: 8px;">
            <table align="center" border="0" cellspacing="0" style="border-spacing: 0;border-collapse: collapse;vertical-align: top;border-top: 8px solid #FFFFFF;width: 100%"><tbody><tr style="vertical-align: top"><td align="center" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top"></td></tr></tbody></table>
          </div>
        </td>
      </tr>
    </tbody></table>
    </td></tr></tbody></table></div><!--[if (gte mso 9)|(IE)]></td><![endif]--><!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]--></td></tr></tbody></table></td></tr></tbody></table>
                        <!--[if mso]>
                        </td></tr></table>
                        <![endif]-->
                        <!--[if (IE)]>
                        </td></tr></table>
                        <![endif]-->
                      </td>
                    </tr>
                  </tbody></table>
                  <table cellpadding="0" cellspacing="0" align="center" width="100%" border="0" style="border-spacing: 0;border-collapse: collapse;vertical-align: top">
                    <tbody><tr style="vertical-align: top">
                      <td width="100%" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;background-color: #7BC4D6">
                        <!--[if gte mso 9]>
                        <table id="outlookholder" border="0" cellspacing="0" cellpadding="0" align="center"><tr><td>
                        <![endif]-->
                        <!--[if (IE)]>
                        <table width="500" align="center" cellpadding="0" cellspacing="0" border="0">
                            <tr>
                                <td>
                        <![endif]-->
                        <table id="patientInfo" cellpadding="0" cellspacing="0" align="center" width="100%" border="0" class="container" style="border-spacing: 0;border-collapse: collapse;vertical-align: top;max-width: 500px;margin: 0 auto;text-align: inherit">
                        <tbody>
                        <tr><td class="td1"><h5>Child Name:</h5></td><td><p>${req.body['child-first-name']} ${req.body['child-last-name']}</p></td></tr>
                        <tr><td class="td1"><h5>Parent Name:</h5></td><td><p>${req.body['parent-name']}</p></td></tr>
                        <tr><td class="td1"><h5>Appointment Time:</h5></td><td><p>${appointment}</p></td></tr>
                        <tr><td class="td1"><h5>Stress Rating:</h5></td><td><p>${req.body['stress-rating']}</p></td></tr>
                        <tr><td class="td1"><h5>Medications:</h5></td><td><p>${req.body['medication']}</p></td></tr>
                        <tr><td class="td1"><h5>Medication Change:</h5></td><td><p>${req.body['medication-change']}</p></td></tr>
                        <tr><td class="td1"><h5>School Changes:</h5></td><td><p>${req.body['school']}</p></td></tr>
                        <tr><td class="td1"><h5>Home Changes:</h5></td><td><p>${req.body['home']}</p></td></tr>
                        <tr><td class="td1"><h5>Environmental Changes:</h5></td><td><p>${req.body['environmental']}</p></td></tr>
                        <tr><td class="td1"><h5>Physical Changes:</h5></td><td><p>${req.body['physical']}</p></td></tr>
                        <tr><td class="td1"><h5>Positive Notes:</h5></td><td><p>${req.body['positive']}</p></td></tr>
                        <tr><td class="td1"><h5>Questions and Concerns:</h5></td><td><p>${req.body['questions']}</p></td></tr>
                      </tbody>
                        </table>
    </td></tr></tbody></table></div><!--[if (gte mso 9)|(IE)]></td><![endif]--><!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]--></td></tr></tbody></table></td></tr></tbody></table>
                        <!--[if mso]>
                        </td></tr></table>
                        <![endif]-->
                        <!--[if (IE)]>
                        </td></tr></table>
                        <![endif]-->
                      </td>
                    </tr>
                  </tbody></table>
                  <table cellpadding="0" cellspacing="0" align="center" width="100%" border="0" style="border-spacing: 0;border-collapse: collapse;vertical-align: top">
                    <tbody><tr style="vertical-align: top">
                      <td width="100%" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;background-color: #228DA8">
                        <!--[if gte mso 9]>
                        <table id="outlookholder" border="0" cellspacing="0" cellpadding="0" align="center"><tr><td>
                        <![endif]-->
                        <!--[if (IE)]>
                        <table width="500" align="center" cellpadding="0" cellspacing="0" border="0">
                            <tr>
                                <td>
                        <![endif]-->
                        <table cellpadding="0" cellspacing="0" align="center" width="100%" border="0" class="container" style="border-spacing: 0;border-collapse: collapse;vertical-align: top;max-width: 500px;margin: 0 auto;text-align: inherit"><tbody><tr style="vertical-align: top"><td width="100%" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top"><table cellpadding="0" cellspacing="0" width="100%" bgcolor="transparent" class="block-grid " style="border-spacing: 0;border-collapse: collapse;vertical-align: top;width: 100%;max-width: 500px;color: #333;background-color: transparent"><tbody><tr style="vertical-align: top"><td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;background-color: transparent;text-align: center;font-size: 0"><!--[if (gte mso 9)|(IE)]><table width="100%" align="center" bgcolor="transparent" cellpadding="0" cellspacing="0" border="0"><tr><![endif]--><!--[if (gte mso 9)|(IE)]><td valign="top" width="500" style="width:500px;"><![endif]--><div class="col num12" style="display: inline-block;vertical-align: top;width: 100%"><table cellpadding="0" cellspacing="0" align="center" width="100%" border="0" style="border-spacing: 0;border-collapse: collapse;vertical-align: top"><tbody><tr style="vertical-align: top"><td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;background-color: transparent;padding-top: 30px;padding-right: 0px;padding-bottom: 30px;padding-left: 0px;border-top: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-left: 0px solid transparent"><table cellpadding="0" cellspacing="0" width="100%" style="border-spacing: 0;border-collapse: collapse;vertical-align: top">
    <table cellpadding="0" cellspacing="0" width="100%" style="border-spacing: 0;border-collapse: collapse;vertical-align: top">
      <tbody><tr style="vertical-align: top">
        <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;padding-top: 15px;padding-right: 10px;padding-bottom: 10px;padding-left: 10px">
          <div style="color:#B8B8C0;line-height:150%;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;">
          	<div style="font-size:12px;line-height:18px;color:#B8B8C0;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;text-align:left;"><p style="margin: 0;font-size: 14px;line-height: 21px;text-align: center">This&nbsp;message is brought to you by ET. Visitor Manager</p><p style="margin: 0;font-size: 14px;line-height: 21px;text-align: center">Please, enjoy the rest of your day.</p></div>
          </div>
        </td>
      </tr>
    </tbody></table>
    <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" style="border-spacing: 0;border-collapse: collapse;vertical-align: top">
      <tbody><tr style="vertical-align: top">
        <td align="center" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;padding-top: 10px;padding-right: 10px;padding-bottom: 10px;padding-left: 10px">
          <div style="height: 0px;">
            <table align="center" border="0" cellspacing="0" style="border-spacing: 0;border-collapse: collapse;vertical-align: top;border-top: 0px solid transparent;width: 100%"><tbody><tr style="vertical-align: top"><td align="center" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top"></td></tr></tbody></table>
          </div>
        </td>
      </tr>
    </tbody></table>
    </td></tr></tbody></table></div><!--[if (gte mso 9)|(IE)]></td><![endif]--><!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]--></td></tr></tbody></table></td></tr></tbody></table>
                        <!--[if mso]>
                        </td></tr></table>
                        <![endif]-->
                        <!--[if (IE)]>
                        </td></tr></table>
                        <![endif]-->
                      </td>
                    </tr>
                  </tbody></table>
              </td>
          </tr>
      </tbody></table>


    </body></html>
`
  };

  mailgun.messages().send(data, function (error, body) {
    console.log(body);
    fs.unlink(filepath, function(){})

  });
});
  res.send('sent email')
});

router.post('/email-adult', (req, res, next) =>{
console.log('sent email');
var today = new Date();
var appointment = tConvert(req.body['appointment-time']);
var $html = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head>

  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta name="viewport" content="width=device-width">
  <meta http-equiv="X-UA-Compatible" content="IE=9; IE=8; IE=7; IE=EDGE">
  <title>Template Base</title>


  <style id="media-query">
    /* Client-specific Styles & Reset */
    #outlook a {
        padding: 0;
    }

    /* .ExternalClass applies to Outlook.com (the artist formerly known as Hotmail) */
    .ExternalClass {
        width: 100%;
    }

    .ExternalClass,
    .ExternalClass p,
    .ExternalClass span,
    .ExternalClass font,
    .ExternalClass td,
    .ExternalClass div {
        line-height: 100%;
    }

    #backgroundTable {
        margin: 0;
        padding: 0;
        width: 100% !important;
        line-height: 100% !important;
    }

    /* Buttons */
    .button a {
        display: inline-block;
        text-decoration: none;
        -webkit-text-size-adjust: none;
        text-align: center;
    }

    .button a div {
        text-align: center !important;
    }

    /* Outlook First */
    body.outlook p {
        display: inline !important;
    }

    a[x-apple-data-detectors] {
  color: inherit !important;
  text-decoration: none !important;
  font-size: inherit !important;
  font-family: inherit !important;
  font-weight: inherit !important;
  line-height: inherit !important; }

    #patientInfo{
      border-spacing: 0;border-collapse: collapse;vertical-align: top;max-width: 1500px;margin: 0 auto;text-align: inherit
    }
    #patientInfo tr{
      vertical-align: top;
    }
    #patientInfo tr td{
      word-break: break-word;border-collapse: collapse !important;vertical-align: top;padding-top: 10px;padding-right: 10px;padding-bottom: 10px;padding-left: 10px
    }
    h5{
      color:#555555;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif; margin: 0;text-align: right;font-size: 8px; line-height: 8px;
    }
    .td1{
      width:25%;
    }
    td p {
      color:#555555;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif; margin: 0;text-align: left;font-size: 8px; line-height: 8px;
    }
  </style>
</head>
<body style="width: 100% !important;min-width: 100%;-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100% !important;margin: 0;padding: 0;background-color: #FFFFFF">
  <table cellpadding="0" cellspacing="0" width="100%" class="body" border="0" style="border-spacing: 0;border-collapse: collapse;vertical-align: top;height: 100%;width: 100%;table-layout: fixed">
      <tbody><tr style="vertical-align: top">
          <td class="center" align="center" valign="top" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;text-align: center;background-color: #FFFFFF">

              <table cellpadding="0" cellspacing="0" align="center" width="100%" border="0" style="border-spacing: 0;border-collapse: collapse;vertical-align: top">
                <tbody><tr style="vertical-align: top">
                  <td width="100%" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;background-color: white">
                    <!--[if gte mso 9]>
                    <table id="outlookholder" border="0" cellspacing="0" cellpadding="0" align="center"><tr><td>
                    <![endif]-->
                    <!--[if (IE)]>
                    <table width="1500" align="center" cellpadding="0" cellspacing="0" border="0">
                        <tr>
                            <td>
                    <![endif]-->
                    <table cellpadding="0" cellspacing="0" align="center" width="100%" border="0" class="container" style="border-spacing: 0;border-collapse: collapse;vertical-align: top;max-width: 1500px;margin: 0 auto;text-align: inherit"><tbody><tr style="vertical-align: top"><td width="100%" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top"><table cellpadding="0" cellspacing="0" width="100%" bgcolor="transparent" class="block-grid two-up" style="border-spacing: 0;border-collapse: collapse;vertical-align: top;width: 100%;max-width: 1500px;color: #333;background-color: transparent"><tbody><tr style="vertical-align: top"><td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;background-color: transparent;text-align: center;font-size: 0"><!--[if (gte mso 9)|(IE)]><table width="100%" align="center" bgcolor="transparent" cellpadding="0" cellspacing="0" border="0"><tr><![endif]--><!--[if (gte mso 9)|(IE)]><td valign="top" width="500" style="width:500px;"><![endif]--><div class="col num6" style="display: inline-block;vertical-align: top;text-align: center;width: 500px"><table cellpadding="0" cellspacing="0" align="center" width="100%" border="0" style="border-spacing: 0;border-collapse: collapse;vertical-align: top"><tbody><tr style="vertical-align: top"><td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;background-color: transparent;padding-top: 20px;padding-right: 0px;padding-bottom: 5px;padding-left: 0px;border-top: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-left: 0px solid transparent"><table cellpadding="0" cellspacing="0" width="100%" border="0" style="border-spacing: 0;border-collapse: collapse;vertical-align: top">
    <tbody><tr style="vertical-align: top">
        <td align="center" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;width: 100%;padding-top: 0px;padding-right: 0px;padding-bottom: 0px;padding-left: 0px">
            <div align="center" style="font-size:12px">
                <a href="" target="_blank">
                    <img class="center fullwidth" align="center" border="0" src="https://static.wixstatic.com/media/fa8c13_5bb9ed75a72c4aec9b550943d76b9ba9.png/v1/crop/x_73,y_280,w_1513,h_931/fill/w_922,h_564,al_c,usm_0.66_1.00_0.01/fa8c13_5bb9ed75a72c4aec9b550943d76b9ba9.png" alt="Image" title="Image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block;border: none;height: auto;line-height: 100%;margin: 0 auto;float: none;width: 100% !important;max-width: 250px" width="250">
                </a>

            </div>
        </td>
    </tr>
</tbody></table>
                    <table id="patientInfo" cellpadding="0" cellspacing="0" align="center" width="100%" border="0" class="container" style="border-spacing: 0;border-collapse: collapse;vertical-align: top;max-width: 1500px;margin: 0 auto;text-align: inherit">
                    <tbody>
                    <tr><td class="td1"><h5>Name:</h5></td><td><p>${req.body['first-name']} ${req.body['last-name']}</p></td></tr>
                    <tr><td class="td1"><h5>Appointment Time:</h5></td><td><p>${appointment}</p></td></tr>
                  </tbody>
                    </table>


</body></html>
`;
pdf.create($html, options).toFile(`./routes/tmpPDF/${req.body['last-name']}_${req.body['first-name']}_${today}.pdf`, function(err, res) {
  if (err) return console.log(err);
  console.log(res); // { filename: '/app/businesscard.pdf' }

var filepath = path.join(__dirname, `./tmpPDF/${req.body['last-name']}_${req.body['first-name']}_${today}.pdf`);
var $file = fs.readFileSync(filepath);

  var data = {
    'from': 'et.visitor@etsimple.com',
    'to': 'jordandunc@gmail.com',
    'subject': `Your ${appointment} Has Arrived!`,
    attachment: filepath,
    'html': `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head>

      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      <meta name="viewport" content="width=device-width">
      <meta http-equiv="X-UA-Compatible" content="IE=9; IE=8; IE=7; IE=EDGE">
      <title>Template Base</title>


      <style id="media-query">
        /* Client-specific Styles & Reset */
        #outlook a {
            padding: 0;
        }

        /* .ExternalClass applies to Outlook.com (the artist formerly known as Hotmail) */
        .ExternalClass {
            width: 100%;
        }

        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
            line-height: 100%;
        }

        #backgroundTable {
            margin: 0;
            padding: 0;
            width: 100% !important;
            line-height: 100% !important;
        }

        /* Buttons */
        .button a {
            display: inline-block;
            text-decoration: none;
            -webkit-text-size-adjust: none;
            text-align: center;
        }

        .button a div {
            text-align: center !important;
        }

        /* Outlook First */
        body.outlook p {
            display: inline !important;
        }

        a[x-apple-data-detectors] {
      color: inherit !important;
      text-decoration: none !important;
      font-size: inherit !important;
      font-family: inherit !important;
      font-weight: inherit !important;
      line-height: inherit !important; }

    /*  Media Queries */
    @media only screen and (max-width: 500px) {
      table[class="body"] img {
        height: auto !important;
        width: 100% !important; }
      table[class="body"] img.fullwidth {
        max-width: 100% !important; }
      table[class="body"] center {
        min-width: 0 !important; }
      table[class="body"] .container {
        width: 95% !important; }
      table[class="body"] .row {
        width: 100% !important;
        display: block !important; }
      table[class="body"] .wrapper {
        display: block !important;
        padding-right: 0 !important; }
      table[class="body"] .columns, table[class="body"] .column {
        table-layout: fixed !important;
        float: none !important;
        width: 100% !important;
        padding-right: 0px !important;
        padding-left: 0px !important;
        display: block !important; }
      table[class="body"] .wrapper.first .columns, table[class="body"] .wrapper.first .column {
        display: table !important; }
      table[class="body"] table.columns td, table[class="body"] table.column td, .col {
        width: 100% !important; }
      table[class="body"] table.columns td.expander {
        width: 1px !important; }
      table[class="body"] .right-text-pad, table[class="body"] .text-pad-right {
        padding-left: 10px !important; }
      table[class="body"] .left-text-pad, table[class="body"] .text-pad-left {
        padding-right: 10px !important; }
      table[class="body"] .hide-for-small, table[class="body"] .show-for-desktop {
        display: none !important; }
      table[class="body"] .show-for-small, table[class="body"] .hide-for-desktop {
        display: inherit !important; }
      .mixed-two-up .col {
        width: 100% !important; } }
     @media screen and (max-width: 500px) {
          div[class="col"] {
              width: 100% !important;
          }
        }

        @media screen and (min-width: 501px) {
          table[class="container"] {
              width: 500px !important;
          }
        }
        #patientInfo{
          border-spacing: 0;border-collapse: collapse;vertical-align: top;max-width: 500px;margin: 0 auto;text-align: inherit
        }
        #patientInfo tr{
          vertical-align: top;
        }
        #patientInfo tr td{
          word-break: break-word;border-collapse: collapse !important;vertical-align: top;padding-top: 10px;padding-right: 10px;padding-bottom: 10px;padding-left: 10px
        }
        h5{
          color:#555555;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif; margin: 0;text-align: right;font-size: 24px; line-height: 28px;
        }
        .td1{
          width:50%;
        }
        td p {
          color:#555555;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif; margin: 0;text-align: left;font-size: 24px; line-height: 28px;
        }
      </style>
    </head>
    <body style="width: 100% !important;min-width: 100%;-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100% !important;margin: 0;padding: 0;background-color: #FFFFFF">
      <table cellpadding="0" cellspacing="0" width="100%" class="body" border="0" style="border-spacing: 0;border-collapse: collapse;vertical-align: top;height: 100%;width: 100%;table-layout: fixed">
          <tbody><tr style="vertical-align: top">
              <td class="center" align="center" valign="top" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;text-align: center;background-color: #FFFFFF">

                  <table cellpadding="0" cellspacing="0" align="center" width="100%" border="0" style="border-spacing: 0;border-collapse: collapse;vertical-align: top">
                    <tbody><tr style="vertical-align: top">
                      <td width="100%" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;background-color: #228DA8">
                        <!--[if gte mso 9]>
                        <table id="outlookholder" border="0" cellspacing="0" cellpadding="0" align="center"><tr><td>
                        <![endif]-->
                        <!--[if (IE)]>
                        <table width="500" align="center" cellpadding="0" cellspacing="0" border="0">
                            <tr>
                                <td>
                        <![endif]-->
                        <table cellpadding="0" cellspacing="0" align="center" width="100%" border="0" class="container" style="border-spacing: 0;border-collapse: collapse;vertical-align: top;max-width: 500px;margin: 0 auto;text-align: inherit"><tbody><tr style="vertical-align: top"><td width="100%" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top"><table cellpadding="0" cellspacing="0" width="100%" bgcolor="transparent" class="block-grid two-up" style="border-spacing: 0;border-collapse: collapse;vertical-align: top;width: 100%;max-width: 500px;color: #333;background-color: transparent"><tbody><tr style="vertical-align: top"><td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;background-color: transparent;text-align: center;font-size: 0"><!--[if (gte mso 9)|(IE)]><table width="100%" align="center" bgcolor="transparent" cellpadding="0" cellspacing="0" border="0"><tr><![endif]--><!--[if (gte mso 9)|(IE)]><td valign="top" width="250" style="width:250px;"><![endif]--><div class="col num6" style="display: inline-block;vertical-align: top;text-align: center;width: 250px"><table cellpadding="0" cellspacing="0" align="center" width="100%" border="0" style="border-spacing: 0;border-collapse: collapse;vertical-align: top"><tbody><tr style="vertical-align: top"><td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;background-color: transparent;padding-top: 20px;padding-right: 0px;padding-bottom: 5px;padding-left: 0px;border-top: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-left: 0px solid transparent"><table cellpadding="0" cellspacing="0" width="100%" border="0" style="border-spacing: 0;border-collapse: collapse;vertical-align: top">
        <tbody><tr style="vertical-align: top">
            <td align="center" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;width: 100%;padding-top: 0px;padding-right: 0px;padding-bottom: 0px;padding-left: 0px">
                <div align="center" style="font-size:12px">
                    <a href="" target="_blank">
                        <img class="center fullwidth" align="center" border="0" src="https://static.wixstatic.com/media/fa8c13_5bb9ed75a72c4aec9b550943d76b9ba9.png/v1/crop/x_73,y_280,w_1513,h_931/fill/w_922,h_564,al_c,usm_0.66_1.00_0.01/fa8c13_5bb9ed75a72c4aec9b550943d76b9ba9.png" alt="Image" title="Image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block;border: none;height: auto;line-height: 100%;margin: 0 auto;float: none;width: 100% !important;max-width: 250px" width="250">
                    </a>

                </div>
            </td>
        </tr>
    </tbody></table>
    </td></tr></tbody></table></div><!--[if (gte mso 9)|(IE)]></td><![endif]--><!--[if (gte mso 9)|(IE)]><td valign="top" width="250" style="width:250px;"><![endif]--><div class="col num6" style="display: inline-block;vertical-align: top;text-align: center;width: 250px"><table cellpadding="0" cellspacing="0" align="center" width="100%" border="0" style="border-spacing: 0;border-collapse: collapse;vertical-align: top"><tbody><tr style="vertical-align: top"><td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;background-color: transparent;padding-top: 20px;padding-right: 0px;padding-bottom: 20px;padding-left: 0px;border-top: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-left: 0px solid transparent"><table cellpadding="0" cellspacing="0" width="100%" style="border-spacing: 0;border-collapse: collapse;vertical-align: top">
      <tbody><tr style="vertical-align: top">
        <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;padding-top: 20px;padding-right: 10px;padding-bottom: 20px;padding-left: 10px">
          <div style="color:#7BC4D6;line-height:150%;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;">
          	<div style="font-size:12px;line-height:18px;color:#7BC4D6;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;text-align:left;"><div style="text-align: right; line-height:18px; font-size:12px;"><span style="font-size: 24px; line-height: 36px;"><strong><span style="line-height: 36px; font-size: 24px;">Uplift Counseling Services&nbsp;</span></strong></span></div></div>
          </div>
        </td>
      </tr>
    </tbody></table>
    </td></tr></tbody></table></div><!--[if (gte mso 9)|(IE)]></td><![endif]--><!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]--></td></tr></tbody></table></td></tr></tbody></table>
                        <!--[if mso]>
                        </td></tr></table>
                        <![endif]-->
                        <!--[if (IE)]>
                        </td></tr></table>
                        <![endif]-->
                      </td>
                    </tr>
                  </tbody></table>
                  <table cellpadding="0" cellspacing="0" align="center" width="100%" border="0" style="border-spacing: 0;border-collapse: collapse;vertical-align: top">
                    <tbody><tr style="vertical-align: top">
                      <td width="100%" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;background-color: #228DA8">
                        <!--[if gte mso 9]>
                        <table id="outlookholder" border="0" cellspacing="0" cellpadding="0" align="center"><tr><td>
                        <![endif]-->
                        <!--[if (IE)]>
                        <table width="500" align="center" cellpadding="0" cellspacing="0" border="0">
                            <tr>
                                <td>
                        <![endif]-->
                        <table cellpadding="0" cellspacing="0" align="center" width="100%" border="0" class="container" style="border-spacing: 0;border-collapse: collapse;vertical-align: top;max-width: 500px;margin: 0 auto;text-align: inherit"><tbody><tr style="vertical-align: top"><td width="100%" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top"><table cellpadding="0" cellspacing="0" width="100%" bgcolor="transparent" class="block-grid " style="border-spacing: 0;border-collapse: collapse;vertical-align: top;width: 100%;max-width: 500px;color: #000000;background-color: transparent"><tbody><tr style="vertical-align: top"><td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;background-color: transparent;text-align: center;font-size: 0"><!--[if (gte mso 9)|(IE)]><table width="100%" align="center" bgcolor="transparent" cellpadding="0" cellspacing="0" border="0"><tr><![endif]--><!--[if (gte mso 9)|(IE)]><td valign="top" width="500" style="width:500px;"><![endif]--><div class="col num12" style="display: inline-block;vertical-align: top;width: 100%"><table cellpadding="0" cellspacing="0" align="center" width="100%" border="0" style="border-spacing: 0;border-collapse: collapse;vertical-align: top"><tbody><tr style="vertical-align: top"><td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;background-color: transparent;padding-top: 5px;padding-right: 0px;padding-bottom: 5px;padding-left: 0px;border-top: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-left: 0px solid transparent"><table cellpadding="0" cellspacing="0" width="100%" style="border-spacing: 0;border-collapse: collapse;vertical-align: top"><tbody><tr style="vertical-align: top"><td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 16px;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif"><div class="our-class"> </div></td></tr></tbody></table>
    </td></tr></tbody></table></div><!--[if (gte mso 9)|(IE)]></td><![endif]--><!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]--></td></tr></tbody></table></td></tr></tbody></table>
                        <!--[if mso]>
                        </td></tr></table>
                        <![endif]-->
                        <!--[if (IE)]>
                        </td></tr></table>
                        <![endif]-->
                      </td>
                    </tr>
                  </tbody></table>
                  <table cellpadding="0" cellspacing="0" align="center" width="100%" border="0" style="border-spacing: 0;border-collapse: collapse;vertical-align: top">
                    <tbody><tr style="vertical-align: top">
                      <td width="100%" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;background-color: #7BC4D6">
                        <!--[if gte mso 9]>
                        <table id="outlookholder" border="0" cellspacing="0" cellpadding="0" align="center"><tr><td>
                        <![endif]-->
                        <!--[if (IE)]>
                        <table width="500" align="center" cellpadding="0" cellspacing="0" border="0">
                            <tr>
                                <td>
                        <![endif]-->
                        <table cellpadding="0" cellspacing="0" align="center" width="100%" border="0" class="container" style="border-spacing: 0;border-collapse: collapse;vertical-align: top;max-width: 500px;margin: 0 auto;text-align: inherit"><tbody><tr style="vertical-align: top"><td width="100%" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top"><table cellpadding="0" cellspacing="0" width="100%" bgcolor="transparent" class="block-grid " style="border-spacing: 0;border-collapse: collapse;vertical-align: top;width: 100%;max-width: 500px;color: #000000;background-color: transparent"><tbody><tr style="vertical-align: top"><td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;background-color: transparent;text-align: center;font-size: 0"><!--[if (gte mso 9)|(IE)]><table width="100%" align="center" bgcolor="transparent" cellpadding="0" cellspacing="0" border="0"><tr><![endif]--><!--[if (gte mso 9)|(IE)]><td valign="top" width="500" style="width:500px;"><![endif]--><div class="col num12" style="display: inline-block;vertical-align: top;width: 100%"><table cellpadding="0" cellspacing="0" align="center" width="100%" border="0" style="border-spacing: 0;border-collapse: collapse;vertical-align: top"><tbody><tr style="vertical-align: top"><td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;background-color: transparent;padding-top: 0px;padding-right: 0px;padding-bottom: 0px;padding-left: 0px;border-top: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-left: 0px solid transparent"><table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" style="border-spacing: 0;border-collapse: collapse;vertical-align: top">
      <tbody><tr style="vertical-align: top">
        <td align="center" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;padding-top: 10px;padding-right: 10px;padding-bottom: 10px;padding-left: 10px">
          <div style="height: 10px;">
            <table align="center" border="0" cellspacing="0" style="border-spacing: 0;border-collapse: collapse;vertical-align: top;border-top: 10px solid transparent;width: 100%"><tbody><tr style="vertical-align: top"><td align="center" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top"></td></tr></tbody></table>
          </div>
        </td>
      </tr>
    </tbody></table>
    <table cellpadding="0" cellspacing="0" width="100%" style="border-spacing: 0;border-collapse: collapse;vertical-align: top">
      <tbody><tr style="vertical-align: top">
        <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;padding-top: 30px;padding-right: 0px;padding-bottom: 30px;padding-left: 0px">
          <div style="color:#228DA8;line-height:120%;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;">
          	<div style="font-size:12px;line-height:14px;color:#228DA8;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;text-align:left;"><p style="margin: 0;font-size: 14px;line-height: 17px;text-align: center"><strong><span style="font-size: 28px; line-height: 33px;" mce-data-marked="1">Your Client Has Arrived</span></strong></p></div>
          </div>
        </td>
      </tr>
    </tbody></table>
    <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" style="border-spacing: 0;border-collapse: collapse;vertical-align: top">
      <tbody><tr style="vertical-align: top">
        <td align="center" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;padding-top: 10px;padding-right: 10px;padding-bottom: 10px;padding-left: 10px">
          <div style="height: 8px;">
            <table align="center" border="0" cellspacing="0" style="border-spacing: 0;border-collapse: collapse;vertical-align: top;border-top: 8px solid #FFFFFF;width: 100%"><tbody><tr style="vertical-align: top"><td align="center" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top"></td></tr></tbody></table>
          </div>
        </td>
      </tr>
    </tbody></table>
    </td></tr></tbody></table></div><!--[if (gte mso 9)|(IE)]></td><![endif]--><!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]--></td></tr></tbody></table></td></tr></tbody></table>
                        <!--[if mso]>
                        </td></tr></table>
                        <![endif]-->
                        <!--[if (IE)]>
                        </td></tr></table>
                        <![endif]-->
                      </td>
                    </tr>
                  </tbody></table>
                  <table cellpadding="0" cellspacing="0" align="center" width="100%" border="0" style="border-spacing: 0;border-collapse: collapse;vertical-align: top">
                    <tbody><tr style="vertical-align: top">
                      <td width="100%" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;background-color: #7BC4D6">
                        <!--[if gte mso 9]>
                        <table id="outlookholder" border="0" cellspacing="0" cellpadding="0" align="center"><tr><td>
                        <![endif]-->
                        <!--[if (IE)]>
                        <table width="500" align="center" cellpadding="0" cellspacing="0" border="0">
                            <tr>
                                <td>
                        <![endif]-->
                        <table id="patientInfo" cellpadding="0" cellspacing="0" align="center" width="100%" border="0" class="container" style="border-spacing: 0;border-collapse: collapse;vertical-align: top;max-width: 500px;margin: 0 auto;text-align: inherit">
                        <tbody>
                        <tr><td class="td1"><h5>Name:</h5></td><td><p>${req.body['first-name']} ${req.body['last-name']}</p></td></tr>
                        <tr><td class="td1"><h5>Appointment Time:</h5></td><td><p>${appointment}</p></td></tr>
                      </tbody>
                        </table>
    </td></tr></tbody></table></div><!--[if (gte mso 9)|(IE)]></td><![endif]--><!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]--></td></tr></tbody></table></td></tr></tbody></table>
                        <!--[if mso]>
                        </td></tr></table>
                        <![endif]-->
                        <!--[if (IE)]>
                        </td></tr></table>
                        <![endif]-->
                      </td>
                    </tr>
                  </tbody></table>
                  <table cellpadding="0" cellspacing="0" align="center" width="100%" border="0" style="border-spacing: 0;border-collapse: collapse;vertical-align: top">
                    <tbody><tr style="vertical-align: top">
                      <td width="100%" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;background-color: #228DA8">
                        <!--[if gte mso 9]>
                        <table id="outlookholder" border="0" cellspacing="0" cellpadding="0" align="center"><tr><td>
                        <![endif]-->
                        <!--[if (IE)]>
                        <table width="500" align="center" cellpadding="0" cellspacing="0" border="0">
                            <tr>
                                <td>
                        <![endif]-->
                        <table cellpadding="0" cellspacing="0" align="center" width="100%" border="0" class="container" style="border-spacing: 0;border-collapse: collapse;vertical-align: top;max-width: 500px;margin: 0 auto;text-align: inherit"><tbody><tr style="vertical-align: top"><td width="100%" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top"><table cellpadding="0" cellspacing="0" width="100%" bgcolor="transparent" class="block-grid " style="border-spacing: 0;border-collapse: collapse;vertical-align: top;width: 100%;max-width: 500px;color: #333;background-color: transparent"><tbody><tr style="vertical-align: top"><td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;background-color: transparent;text-align: center;font-size: 0"><!--[if (gte mso 9)|(IE)]><table width="100%" align="center" bgcolor="transparent" cellpadding="0" cellspacing="0" border="0"><tr><![endif]--><!--[if (gte mso 9)|(IE)]><td valign="top" width="500" style="width:500px;"><![endif]--><div class="col num12" style="display: inline-block;vertical-align: top;width: 100%"><table cellpadding="0" cellspacing="0" align="center" width="100%" border="0" style="border-spacing: 0;border-collapse: collapse;vertical-align: top"><tbody><tr style="vertical-align: top"><td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;background-color: transparent;padding-top: 30px;padding-right: 0px;padding-bottom: 30px;padding-left: 0px;border-top: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-left: 0px solid transparent"><table cellpadding="0" cellspacing="0" width="100%" style="border-spacing: 0;border-collapse: collapse;vertical-align: top">
    <table cellpadding="0" cellspacing="0" width="100%" style="border-spacing: 0;border-collapse: collapse;vertical-align: top">
      <tbody><tr style="vertical-align: top">
        <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;padding-top: 15px;padding-right: 10px;padding-bottom: 10px;padding-left: 10px">
          <div style="color:#B8B8C0;line-height:150%;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;">
          	<div style="font-size:12px;line-height:18px;color:#B8B8C0;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;text-align:left;"><p style="margin: 0;font-size: 14px;line-height: 21px;text-align: center">This&nbsp;message is brought to you by ET. Visitor Manager</p><p style="margin: 0;font-size: 14px;line-height: 21px;text-align: center">Please, enjoy the rest of your day.</p></div>
          </div>
        </td>
      </tr>
    </tbody></table>
    <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" style="border-spacing: 0;border-collapse: collapse;vertical-align: top">
      <tbody><tr style="vertical-align: top">
        <td align="center" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;padding-top: 10px;padding-right: 10px;padding-bottom: 10px;padding-left: 10px">
          <div style="height: 0px;">
            <table align="center" border="0" cellspacing="0" style="border-spacing: 0;border-collapse: collapse;vertical-align: top;border-top: 0px solid transparent;width: 100%"><tbody><tr style="vertical-align: top"><td align="center" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top"></td></tr></tbody></table>
          </div>
        </td>
      </tr>
    </tbody></table>
    </td></tr></tbody></table></div><!--[if (gte mso 9)|(IE)]></td><![endif]--><!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]--></td></tr></tbody></table></td></tr></tbody></table>
                        <!--[if mso]>
                        </td></tr></table>
                        <![endif]-->
                        <!--[if (IE)]>
                        </td></tr></table>
                        <![endif]-->
                      </td>
                    </tr>
                  </tbody></table>
              </td>
          </tr>
      </tbody></table>


    </body></html>
`
  };

  mailgun.messages().send(data, function (error, body) {
    console.log(body);
    fs.unlink(filepath, function(){})

  });
});
  res.send('sent email')
});

function tConvert (time) {
  // Check correct time format and split into components
  time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

  if (time.length > 1) { // If time format correct
    time = time.slice (1);  // Remove full string match value
    time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
    time[0] = +time[0] % 12 || 12; // Adjust hours
  }
  return time.join (''); // return adjusted time or original string
}

module.exports = router;
