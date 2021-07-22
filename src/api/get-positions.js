import sourceData from "@/data.json";

const getPositions = (number) => {
  let pos = [];
  for (let i = 0; i < number; i++) {
    pos.push(sourceData.positions[i]);
  }
  return pos;
};

export default getPositions;
