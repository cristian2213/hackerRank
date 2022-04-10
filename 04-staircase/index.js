function staircase(n) {
  // Write your code here
  let stairs = ``;
  const blank = ' ';

  for (let i = 1; i <= n; i++) {
    const limit = i + 1;
    const symbols = blank.repeat(n - i);
    let row = `${symbols}`;

    for (let j = 1; j < limit; j++) {
      if (j === limit) {
        row += `# \n`;
      } else {
        row += `#`;
      }
    }
    stairs += `${row} \n`;
    row = '';
  }
  console.log(stairs);
}

staircase(6);
//      #
//     ##
//    ###
//   ####
//  #####
// ######
staircase(10);
//          #
//         ##
//        ###
//       ####
//      #####
//     ######
//    #######
//   ########
//  #########
// ##########
