const fs = require("fs");
const path = require("path");
const tangram = require("@tangramdotdev/tangram");

// Get the path to the .tangram file.
const modelPath = path.join(__dirname, "FedCycleData071012.tangram");
// Load the model from the path.
const modelData = fs.readFileSync(modelPath);
const model = new tangram.Model(modelData.buffer);


// let lastday = .getTime() - 1123200000;

const today = new Date().getTime()

console.log(new Date(lastday).toString());
console.log(new Date(today).toString());

// lastday
// 13 days
// today = lastday + 13 days

const input = {
    ClientID: "nfp8122",
    CycleNumber: 3,
    Group: 0,
    CycleWithPeakorNot: 1,
    ReproductiveCategory: 0,
    LengthofCycle: 	29,
    MeanCycleLength: 27.33,	
    // EstimatedDayofOvulation: 15,
    LengthofLutealPhase: 14, 	
    FirstDayofHigh: 13,	
    TotalNumberofHighDays: 1,	
    TotalHighPostPeak: 	0,
    TotalNumberofPeakDays: 2,	
    // TotalDaysofFertility: 5,	
    // TotalFertilityFormula: 13,	
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

const output = model.predict(input);

const res = output["className"]; //Ovulation day



// console.log("Output:", output);



