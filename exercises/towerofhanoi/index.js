// write a rescursive program for tower of hanoi with n disks
// pass 4 as n

function towerOfHanoi(n, source, destination, aux) {
    if (n === 1) {
        return console.log(`Move disk ${n} from ${source} to ${destination}`);
    }
    towerOfHanoi(n - 1, source, aux, destination);
    console.log(`Move disk ${n} from ${source} to ${destination}`);
    towerOfHanoi(n - 1, aux, destination, source);
}

towerOfHanoi(4, 'A', 'C', 'B');