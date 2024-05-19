// var arr = [
//   0,
//   true,
//   {
//     name: "furqan",
//     study: [
//       "isPending",
//       {
//         name: [
//           "javascript",
//           "bootstrap",
//           [
//             "ok",
//             {
//               key: "value",
//               obj: {
//                 name: "tanzil",
//                 fatherName: "Shakeel",
//                 study: [
//                   "bootstrap",
//                   "HTML",
//                   "Css",
//                   "javascript",
//                   {
//                     version: {
//                       bootstrap: 5,
//                       HTML: 5,
//                       CSS: 3,
//                       Javascript: "ES5",
//                     },
//                   },
//                 ],
//               },
//             },
//           ],
//           "Css",
//           "Html",
//           {
//             version: ["ES5", "Bootstrap5", "CSS3", "HTML5"],
//           },
//         ],
//       },
//     ],
//   },
// ];

// console.log(arr[2].study[1].name[2][1].obj.study[4].version.Javascript);

var obj = {
  name: [
    {
      student1: {
        name: "Tanzil",
        fatherName: [
          "Shakeel",
          {
            study: [
              "Javascript",
              "HTML",
              "CSS",
              "Bootstrap",
              {
                version: ["JavascriptES5"],
              },
            ],
          },
        ],
      },
    },
  ],
};
console.log(obj.name[0].student1.fatherName[1].study[4].version[0])