require("dotenv").config();
const { default: axios } = require("axios");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const fs = require("fs");
const path = require("path");
const tangram = require("@tangramdotdev/tangram");

// Get the path to the .tangram file.
const modelPath = path.join(__dirname, "FedCycleData071012.tangram");
// Load the model from the path.
const modelData = fs.readFileSync(modelPath);
const model = new tangram.Model(modelData.buffer);

const app = express();

const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }

app.use(cors(corsOptions));
app.use(cookieParser());

app.use(express.json());

const postPatientApi = "https://fhir.a4bb78it5rl2.static-test-account.isccloud.io/Observation";
const getPatientApi = "https://fhir.a4bb78it5rl2.static-test-account.isccloud.io/Observation?identifier=mithack21";


//FHIR json Observarion format
let obj = {
    resourceType: "Observation",
    id: "mithack_21",
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
    },
    identifier: [ 
        {
            value: "mithack21"
        }
    ]
}

//working API
app.post("/postPatient", async (req, res) => {
    const headers = {
        "x-api-key": "srOd0BhfKd5k7z5Dy1SUWaQpWfOg1ycH7ShG5R6D"
    }
    //Appending the user's first date of last menstrual period to FHIR body 
    const offset = new Date(req.body.lastPeriodDate).getTimezoneOffset();
    let mydate = new Date(req.body.lastPeriodDate).getTime()-(offset*60*1000);

    //Reformat date YYYY-MM-DD
    obj.code.coding[0].display = new Date(mydate).toISOString().split('T')[0];
    obj.code.text = new Date();//req.body.todayDate;
    obj.meta.tag[0].display = req.body.phaseResult;
    
    const response = await axios.post(postPatientApi,obj, {
        headers
    })
    res.json(response.status);

});

//API not working yet
app.get("/getPatientForResearch", async (req, res) => {
    const headers = {
        "x-api-key": "srOd0BhfKd5k7z5Dy1SUWaQpWfOg1ycH7ShG5R6D"
    }
    const response = await axios.get(getPatientApi, {headers});
    
    console.log(JSON.stringify(response.data));

    const hackmitPatients = response.data;
    
    // .filter((patient) => {
    //     //console.log(JSON.stringify(patient))
    //     if(isNaN(patient.resource.id)){
    //         console.log(patient.resource);
    //     }
    //     return patient.resource.id == menstrual_id});

    res.json(hackmitPatients);
});

//To test this API, try sending this obj as a body. Tweak the day param to get different results
const testBody = {
    lastPeriodDate: '2021-09-05T04:55:41.776Z',
    lengthCycle: 27,
    flow: 'heavy'
}

//Get the phase prediction using ML model
app.post("/getPredictionResult", (req, res) => {
    console.log(req.body);
    let msg = "";

    const offset = new Date(req.body.lastPeriodDate).getTimezoneOffset();
    let last_period_date = new Date(req.body.lastPeriodDate).getTime()-(offset*60*1000); //Date
    let length_of_cyle = parseInt(req.body.lengthCycle); //int
    let flow_level = req.body.flow; //string

    if (flow_level == "heavy" || flow_level == "medium") {
        msg = "menstrual"
    }
    else {
        const input = {
            ClientID: "nfp8122",
            CycleNumber: 3,
            Group: 0,
            CycleWithPeakorNot: 1,
            ReproductiveCategory: 0,
            LengthofCycle: 	length_of_cyle, //29,
            MeanCycleLength: 27.33,	
            // EstimatedDayofOvulation: 15,
            LengthofLutealPhase: 14, 	
            FirstDayofHigh: 13,	
            TotalNumberofHighDays: 1,	
            TotalHighPostPeak: 	0,
            TotalNumberofPeakDays: 2,	
            TotalDaysofFertility: 5,	
            TotalFertilityFormula: 13,	
            LengthofMenses: 5,	
            MeanMensesLength: 4.49,	
            MensesScoreDayOne: 3,	
            MensesScoreDayTwo: 3,	
            MensesScoreDayThree: 2,	
            MensesScoreDayFour: 1,	
            MensesScoreDayFive: 1,	
            MensesScoreDaySix: 0,	
            MensesScoreDaySeven: 0,	
            MensesScoreDayEight: 0,	
            MensesScoreDayNine: 0,	
            MensesScoreDayTen: 0,	
            MensesScoreDay11: 0,	
            MensesScoreDay12: 0,	
            MensesScoreDay13: 0,	
            MensesScoreDay14: 0,	
            MensesScoreDay15: 0,	
            TotalMensesScore: 10,	
            MeanBleedingIntensity: 0,	
            NumberofDaysofIntercourse: 9.04,	
            IntercourseInFertileWindow: 1,	
            UnusualBleeding: 0,	
            PhasesBleeding: 0,	
            IntercourseDuringUnusBleed: 0,	
            Age: 36,	
            AgeM: 39,	
            Maristatus: 0,	
            MaristatusM: 0,	
            Yearsmarried: 10,	
            Wedding: 0,	
            Religion: 0,	
            ReligionM: 0,	
            Ethnicity: 0,	
            EthnicityM: 0,	
            Schoolyears: 8,	
            SchoolyearsM: 8,	
            OccupationM: 3,	
            IncomeM: 5,	
            Height: 63,	
            Weight: 120,	
            Reprocate: 0,	
            Numberpreg: 3,	
            Livingkids: 3,	
            Miscarriages: 0,	
            Abortions: 0,	
            Medvits: 0,	
            Medvitexplain: 0,	
            Gynosurgeries: 0,	
            LivingkidsM: 0,	
            Boys: 0,	
            Girls: 0,	
            MedvitsM: 0,	
            MedvitexplainM: 0,	
            Urosurgeries: 0,	
            Breastfeeding: 0,	
            Method: 9,	
            Prevmethod: 0,	
            Methoddate: 0,	
            Whychart: 2,	
            Nextpreg: 7,	
            NextpregM: 7,	
            Spousesame: 1,	
            SpousesameM: 1,	
            Timeattemptpreg: 0,	
            BMI: 21.25472411,
        }
        //ML prediction of ovulation day
        const output = model.predict(input);
        
        const ovulation_res = output["className"]; 
        console.log(ovulation_res);

        //Calculations in milisecond
        let ovulation_milisec = ovulation_res * 24 * 60 * 60 * 1000;
        let length_of_cyle_milisec = length_of_cyle * 24 * 60 * 60 * 1000;
        let max_period_days = 7 * 24 * 60 * 60 * 1000; //7 days
        let next_ovulation_date = last_period_date + ovulation_milisec;
        let next_period_date = last_period_date + length_of_cyle_milisec;

        const offset_today = new Date().getTimezoneOffset();
        const today = new Date().getTime()-(offset*60*1000);;
        
        //These are not all the possible cases but good enough for demo
        //The furthest date of prediction is the next menstrual window

        console.log("ovulation",next_ovulation_date);
        console.log("today",today);
        console.log("diff", today-next_ovulation_date);

        //Ovulation
        if (today == next_ovulation_date || Math.abs(today - next_ovulation_date) < 86400000){ //1 day
            msg = "ovulation";
        }
        //Current menstrual
        else if (today >= next_period_date && today <= next_period_date + max_period_days) {
            if (flow_level == "light") {
                msg = "menstrual";
                
            }
            else {
                msg = "follicular";
            }
        }
        //Next menstrual
        else if (today >= last_period_date && today <= last_period_date + max_period_days) {
            if (flow_level == "light") {
                msg = "menstrual";
            }
            else {
                msg = "follicular";
            }
        }
        //Luteal phase
        else if (today > next_ovulation_date && today < next_period_date) {
            msg = "luteal";
        }
        //Follicular phase
        else if (today >= last_period_date && today < next_ovulation_date) {
            msg = "follicular";
        }
        else {
            msg = "follicular"
        }
    }
    res.json({ message: msg });
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