var data = [  
    //{
       // title: "Primary Colours",
        //colors: [
          //  {label: 'Red', color: "#f00"},
            //{label: 'Green', color: "#0f0"},
            //{label: 'Blue', color: "#00f"}
        //]
   // },
    {
        title: "Light & High Saturation",
        colors: [
            {label: "R", color: "#ff0900"},
            {label: "Y", color: "#fff600"},
            {label: "G", color: "#16ff05"},
            {label: "C", color: "#00ffbf"},
            {label: "B", color: "#0009ff"},
            {label: "P", color: "#c500ff"}


        ]
    },
    {
        title: "Light & Low Saturation",
        colors: [
            {label: "R", color: "#ffa09f"},
            {label: "Y", color: "#fff8a5"},
            {label: "G", color: "#9effc9"},
            {label: "C", color: "#92fff2"},
            {label: "B", color: "#92aaff"},
            {label: "P", color: "#d598ff"}
        ]
    },
    {
        title: "Dark & High Saturation",
        colors: [
            {label: "R", color: "#800500"},
            {label: "Y", color: "807600"},
            {label: "G", color: "#0b8002"},
            {label: "C", color: "#008064"},
            {label: "B", color: "#000480"},
            {label: "P", color: "630080"}
        ]
    },
    {
        title: "Dark & Low Saturation",
        colors: [
            {label: "R", color: "#805050"},
            {label: "Y", color: "#807d4b"},
            {label: "G", color: "#49805b"},
            {label: "C", color: "#3e806e"},
            {label: "B", color: "#495580"},
            {label: "P", color: "#6a4780"}
        ]
    }
    


    
];

var colorWheel = d3.colorWheel().width(400).height(260); // 300*360

var svg = d3.select("#colour-wheels").selectAll("svg")  
    .data(data)
    .enter().append("svg")
    .call(colorWheel);