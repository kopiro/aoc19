let input = `3,9,8,9,10,9,4,9,99,-1,8`;

const k = (P: Array<number>, index: number, mode: number = 0) => {
  mode;
  return mode === 0 ? P[P[index]] : P[index];
};

const instructions = {
  // addalet input = `3,225,1,225,6,6,1100,1,238,225,104,0,1102,16,13,225,1001,88,68,224,101,-114,224,224,4,224,1002,223,8,223,1001,224,2,224,1,223,224,223,1101,8,76,224,101,-84,224,224,4,224,102,8,223,223,101,1,224,224,1,224,223,223,1101,63,58,225,1102,14,56,224,101,-784,224,224,4,224,102,8,223,223,101,4,224,224,1,223,224,223,1101,29,46,225,102,60,187,224,101,-2340,224,224,4,224,102,8,223,223,101,3,224,224,1,224,223,223,1102,60,53,225,1101,50,52,225,2,14,218,224,101,-975,224,224,4,224,102,8,223,223,1001,224,3,224,1,223,224,223,1002,213,79,224,101,-2291,224,224,4,224,102,8,223,223,1001,224,2,224,1,223,224,223,1,114,117,224,101,-103,224,224,4,224,1002,223,8,223,101,4,224,224,1,224,223,223,1101,39,47,225,101,71,61,224,101,-134,224,224,4,224,102,8,223,223,101,2,224,224,1,224,223,223,1102,29,13,225,1102,88,75,225,4,223,99,0,0,0,677,0,0,0,0,0,0,0,0,0,0,0,1105,0,99999,1105,227,247,1105,1,99999,1005,227,99999,1005,0,256,1105,1,99999,1106,227,99999,1106,0,265,1105,1,99999,1006,0,99999,1006,227,274,1105,1,99999,1105,1,280,1105,1,99999,1,225,225,225,1101,294,0,0,105,1,0,1105,1,99999,1106,0,300,1105,1,99999,1,225,225,225,1101,314,0,0,106,0,0,1105,1,99999,1107,677,677,224,102,2,223,223,1006,224,329,1001,223,1,223,108,677,677,224,1002,223,2,223,1005,224,344,101,1,223,223,1008,226,226,224,102,2,223,223,1006,224,359,1001,223,1,223,1107,226,677,224,102,2,223,223,1006,224,374,1001,223,1,223,8,677,226,224,102,2,223,223,1006,224,389,101,1,223,223,8,226,226,224,102,2,223,223,1006,224,404,101,1,223,223,7,677,677,224,1002,223,2,223,1006,224,419,101,1,223,223,7,677,226,224,1002,223,2,223,1005,224,434,101,1,223,223,1108,677,226,224,1002,223,2,223,1006,224,449,1001,223,1,223,108,677,226,224,1002,223,2,223,1006,224,464,101,1,223,223,1108,226,677,224,1002,223,2,223,1006,224,479,101,1,223,223,1007,677,677,224,1002,223,2,223,1006,224,494,1001,223,1,223,107,226,226,224,102,2,223,223,1005,224,509,1001,223,1,223,1008,677,226,224,102,2,223,223,1005,224,524,1001,223,1,223,1007,226,226,224,102,2,223,223,1006,224,539,101,1,223,223,1108,677,677,224,102,2,223,223,1005,224,554,1001,223,1,223,1008,677,677,224,1002,223,2,223,1006,224,569,101,1,223,223,1107,677,226,224,1002,223,2,223,1006,224,584,1001,223,1,223,7,226,677,224,102,2,223,223,1005,224,599,101,1,223,223,108,226,226,224,1002,223,2,223,1005,224,614,101,1,223,223,107,226,677,224,1002,223,2,223,1005,224,629,1001,223,1,223,107,677,677,224,1002,223,2,223,1006,224,644,101,1,223,223,1007,677,226,224,1002,223,2,223,1006,224,659,101,1,223,223,8,226,677,224,102,2,223,223,1005,224,674,1001,223,1,223,4,223,99,226`;
global.STDIN_INPUT = 5;

const k = (P: Array<number>, index: number, mode: number = 0) => {
  mode;
  return mode === 0 ? P[P[index]] : P[index];
};

const instructions = {
  // add
  1: (P: Array<number>, index: number, mode: Array<number>) => {
    const ra = P[index + 3];
    const a = k(P, index + 1, mode[0]);
    const b = k(P, index + 2, mode[1]);
    P[ra] = a + b;
    return index + 4;
  },
  // mult
  2: (P: Array<number>, index: number, mode: Array<number>) => {
    const ra = P[index + 3];
    const a = k(P, index + 1, mode[0]);
    const b = k(P, index + 2, mode[1]);
    P[ra] = a * b;
    return index + 4;
  },
  // stdin
  3: (P: Array<number>, index: number, mode: Array<number>) => {
    const ra = P[index + 1];
    P[ra] = global.STDIN_INPUT;
    return index + 2;
  },
  // stdout
    4: (P: Array<number>, index: number, mode: Array<number>) => {
    console.log("->", k(P, index + 1, mode[1]));
    return index + 2;
  },
  // jit
  5: (P: Array<number>, index: number, mode: Array<number>) => {
    const a = k(P, index + 1, mode[0]);
    if (a !== 0) {
        return k(P, index + 2, mode[1]);
    }
    return index + 3;
  },
  // jif
  6: (P: Array<number>, index: number, mode: Array<number>) => {
    const a = k(P, index + 1, mode[0]);
    if (a === 0) {
        return k(P, index + 2, mode[1]);
    }
    return index + 3;
  },
  // less than
  7: (P: Array<number>, index: number, mode: Array<number>) => {
    const ra = P[index + 3];
    const a = k(P, index + 1, mode[0]);
    const b = k(P, index + 2, mode[1]);
    P[ra] = a < b ? 1 : 0;
    return index + 4;
  },
  // equals
  8: (P: Array<number>, index: number, mode: Array<number>) => {
    const ra = P[index + 3];
    const a = k(P, index + 1, mode[0]);
    const b = k(P, index + 2, mode[1]);
    P[ra] = a === b ? 1 : 0;
    return index + 4;
  }
};

const program = input.split(",").map(e => +e);

let ip = 0;
while (true) {
  const p = program[ip];
  if (p === 99) break;

  const opcode = p == 99 ? 99 : p % 10;
  const modes = [3, 4, 5].map(
    e =>
      ((p % Math.pow(10, e)) - (p % Math.pow(10, e - 1))) / Math.pow(10, e - 1)
  );

  if (!instructions[opcode]) {
    program;
    ip;
    p;
    throw new Error(`${opcode} invalid opcode`);
  }

  ip = instructions[opcode](program, ip, modes);
}

program;

  1: (P: Array<number>, index: number, mode: Array<number>) => {
    const ra = P[index + 3];
    const a = k(P, index + 1, mode[0]);
    const b = k(P, index + 2, mode[1]);
    P[ra] = a + b;
    return index + 4;
  },
  // mult
  2: (P: Array<number>, index: number, mode: Array<number>) => {
    const ra = P[index + 3];
    const a = k(P, index + 1, mode[0]);
    const b = k(P, index + 2, mode[1]);
    P[ra] = a * b;
    return index + 4;
  },
  // stdin
  3: (P: Array<number>, index: number, mode: Array<number>) => {
    const ra = P[index + 1];
    P[ra] = global.STDIN_INPUT;
    return index + 2;
  },
  // stdout
  4: (P: Array<number>, index: number, mode: Array<number>) => {
    console.log("->", k(P, index + 1, mode[1]));
    return index + 2;
  },
  // jit
  5: (P: Array<number>, index: number, mode: Array<number>) => {
    const a = k(P, index + 1, mode[1]);
    if (a !== 0) {
      return k(P, index + 2, mode[2]);
    }
    return index + 2;
  },
  // jif
  6: (P: Array<number>, index: number, mode: Array<number>) => {
    const a = k(P, index + 1, mode[1]);
    if (a === 0) {
      return k(P, index + 2, mode[2]);
    }
    return index + 2;
  },
  // less than
  7: (P: Array<number>, index: number, mode: Array<number>) => {
    const ra = P[index + 3];
    const a = k(P, index + 1, mode[1]);
    const b = k(P, index + 2, mode[2]);
    P[ra] = a < b ? 1 : 0;
    return index + 4;
  },
  // equals
  7: (P: Array<number>, index: number, mode: Array<number>) => {
    const ra = P[index + 3];
    const a = k(P, index + 1, mode[1]);
    const b = k(P, index + 2, mode[2]);
    P[ra] = a === b ? 1 : 0;
    return index + 4;
  }
};

global.STDIN_INPUT = 1;

const program = input.split(",").map(e => +e);

let ip = 0;
let i = 0;

while (true) {
  const p = program[ip];
  if (p === 99) break;

  const opcode = p == 99 ? 99 : p % 10;
  const modes = [3, 4, 5].map(
    e =>
      ((p % Math.pow(10, e)) - (p % Math.pow(10, e - 1))) / Math.pow(10, e - 1)
  );

  p;
  i;
  opcode;

  if (!instructions[opcode]) {
    program;
    ip;
    p;
    throw new Error(`${opcode} invalid opcode`);
  }

  ip = instructions[opcode](program, ip, modes);
  i++;
}

program;
