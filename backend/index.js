require("dotenv").config();
const { default: axios } = require("axios");
const express = require("express");
const app = express();



app.use(express.json());

const postPatientApi = "https://fhir.a4bb78it5rl2.static-test-account.isccloud.io/Observation"

let obj = {
  resourceType: "Observation",
  id: "date-lastmp",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: date-lastmp</p><p><b>status</b>: final</p><p><b>category</b>: AOE <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'survey' = 'Survey', given as 'Survey'})</span></p><p><b>code</b>: Date last menstrual period <span>(Details : {LOINC code '8665-2' = 'Last menstrual period start date', given as 'Date last menstrual period'})</span></p><p><b>subject</b>: <a>Patient/pat2</a></p><p><b>effective</b>: 24/01/2016</p><p><b>value</b>: 30/12/2016</p></div>"
  },
  status: "final",
  category: [
    {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/observation-category",
          code: "survey",
          display: "Survey"
        }
      ],
      text: "AOE"
    }
  ],
  code: {
    coding: [
      {
        system: "http://loinc.org",
        code: "8665-2",
        display: "Date last menstrual period"
      }
    ],
    text: "Date last menstrual period"
  },
  subject: {
    reference: "Patient/pat2"
  },
  effectiveDateTime: "2016-01-24",
  valueDateTime: "2016-12-30",
  meta: {
    tag: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "HTEST",
        display: "test health data"
      }
    ]
  }
}
app.post("/postPatient", async (req, res) => {
  const headers = {
    "x-api-key": "srOd0BhfKd5k7z5Dy1SUWaQpWfOg1ycH7ShG5R6D"
  }
  const response = await axios.post(postPatientApi,obj, {
    headers
  })
  
  res.json(response.status);

});

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to mithack application." });

});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});