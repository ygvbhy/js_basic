const spreadSheetContainer = document.querySelector("#spreadsheet-container");
const exportBtn = document.querySelector("#export-btn");
const ROWS = 10;
const COLS = 10;
const spreadsheet = [];
const alphabets = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

class Cell {
  constructor(
    isHeader,
    disabled,
    data,
    row,
    column,
    rowName,
    columnName,
    active = false
  ) {
    this.isHeader = isHeader;
    this.disabled = disabled;
    this.data = data;
    this.row = row;
    this.column = column;
    this.rowName = rowName;
    this.columnName = columnName;
    this.active = active;
  }
}

exportBtn.onclick = function (e) {
  let csv = "";
  for (let i = 1; i < spreadsheet.length; i++) {
    csv +=
      spreadsheet[i]
        .filter((item) => !item.isHeader)
        .map((item) => item.data)
        .join(",") + "\r\n";
  }

  const csvObj = new Blob([csv]);
  const csvUrl = URL.createObjectURL(csvObj);

  const a = document.createElement("a");
  a.href = csvUrl;
  a.download = "spreadsheet name.csv";
  a.click();
};

initSpreadsheet();

function initSpreadsheet() {
  for (let i = 0; i < ROWS; i++) {
    let spreadsheetRow = [];
    for (let j = 0; j < COLS; j++) {
      let cellData = "";
      let isHeader = false;
      let diasbled = false;
      // 모든 row 첫 번째 컴럼에 숫자 넣기
      if (j === 0) {
        isHeader = true;
        diasbled = true;
        cellData = i;
      }
      if (i === 0) {
        isHeader = true;
        diasbled = true;
        cellData = alphabets[j - 1];
      }

      // 첫 번째 row의 컬럼은 ""
      if (cellData <= 0) {
        cellData = "";
      }
      if (!cellData) {
        cellData = "";
      }

      const rowName = i;
      const columnName = alphabets[j - 1];

      const cell = new Cell(
        isHeader,
        diasbled,
        cellData,
        i,
        j,
        rowName,
        columnName,
        false
      );
      spreadsheetRow.push(cell);
    }
    spreadsheet.push(spreadsheetRow);
  }
  drawSheet();
}

function createCellEl(cell) {
  const cellEl = document.createElement("input");
  cellEl.className = "cell";
  cellEl.id = "cell_" + cell.row + cell.column;
  cellEl.value = cell.data;
  cellEl.disabled = cell.disabled;

  if (cell.isHeader) {
    cellEl.classList.add("header");
  }

  cellEl.onclick = () => handleCellClick(cell);
  cellEl.onchange = (e) => handleChange(e.target.value, cell);
  return cellEl;
}

function handleChange(data, cell) {
  cell.data = data;
}

function handleCellClick(cell) {
  clearHeaderActiveStates();
  const columnHeader = spreadsheet[0][cell.column];
  const rowHeader = spreadsheet[cell.row][0];
  const columnHeaderEl = getElFromRowCol(columnHeader.row, columnHeader.column);
  const rowHeaderEl = getElFromRowCol(rowHeader.row, rowHeader.column);
  columnHeaderEl.classList.add("active");
  rowHeaderEl.classList.add("active");
  document.querySelector("#cell-status").innerHTML =
    cell.columnName + cell.rowName;
}

function clearHeaderActiveStates() {
  const headers = document.querySelectorAll(".header");
  headers.forEach((header) => {
    header.classList.remove("active");
  });
}

function getElFromRowCol(row, col) {
  return document.querySelector("#cell_" + row + col);
}

function drawSheet() {
  for (let i = 0; i < spreadsheet.length; i++) {
    const rowContainerEl = document.createElement("div");
    rowContainerEl.className = "cell-row";
    for (let j = 0; j < spreadsheet[i].length; j++) {
      const cell = spreadsheet[i][j];
      rowContainerEl.append(createCellEl(cell));
    }
    spreadSheetContainer.append(rowContainerEl);
  }
}
