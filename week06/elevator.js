const validCommand = ["UP", "DN"];

const minFloor = 0;
const maxFloor = 3;

function changeFloor(currentFloor, minFloor, maxFloor, delta) {
    const newCurrentFloor = currentFloor + delta;
    if (newCurrentFloor < minFloor) {
        console.log("can't go down");
        return currentFloor;
    }
    if (newCurrentFloor > maxFloor) {
        console.log("can't go up");
        return currentFloor;
    }
    return newCurrentFloor;
}

function ride(commandList) {
    let currentFloor = 0;
    let currentIndex = 0;
    let commandBuffer = "";

    while (true) {
        if (currentIndex < commandList.length) {
            const letter = commandList.substring(currentIndex, currentIndex + 1);
            commandBuffer += letter;
        }

        // command.length === 2 is actually optional here
        if (commandBuffer.length === 2) {
            if (validCommand.includes(commandBuffer)){
                currentFloor = changeFloor(currentFloor, minFloor, maxFloor, commandBuffer === "UP" ? 1 : -1);
                console.log("Current floor = " + currentFloor);
            } else {
                console.log("Incorrect command = " + commandBuffer);
            }

            commandBuffer = "";
        }

        if (currentIndex === commandList.length - 1) break;
        currentIndex++;
    }
}

const correctCommands1 = "UPUPDN";
const correctCommands2 = "DNDNUPUPUPUPDN";
const incorrectCommands = "UPUPXX";

// TODO at home: 1) try UP and DOWN; 2) incorrectCommands = ["UPUDN"] incomplete command
// TODO RegEx? to filter input sequence

ride(correctCommands1);








