/**
 * @author Alex Mourtziapis
 * @copyright 2015 Shunless Studio.
 */

/**
 *
 * @class Enemy
 * @constructor
 * @param enemy's color (Web Color)
 * @param enemy's cell HashId  (string)
 */
Enemy = function (_color1, blockID) {
    //the color of the Enemy
    this.color = _color1;
    //
    if (typeof (blockID) === 'undefined') {
        alert('Error : "blockID" is undefined');

    } else {
        this.block = blockID;
    }

    //indicates if this enemy is dead
    this.isDead = false;
    //this enemys postion in  grid.cell array
    this._c = 0;

    grid.cell[grid.getCell(this.block)].type = 'Enemy';
};

Enemy.prototype = {

    /**
     * Should be over-ridden.
     * @method Enemy#init
     */
    init: function () {
        this._c = grid.getCell(this.block);

        grid.cell[this._c].setColor(this.color);
        grid.cell[this._c].setCellType('Enemy');
    },

    /**
     * Make the enemy move towards a direction of your choice.
     * @method Enemy#move
     * @param {string} SwipeType - Direction to move.
     */
    move: function (SwipeType) {
        switch (SwipeType) {
            case 'up':
                if (grid.cell[this._c].checkCell(SwipeType, this._c) && grid.cell[this._c - cellsCntX].type !== 'Enemy') {

                    //Handle up Swap
                    grid.cell[this._c].setCellType('Normal');
                    grid.cell[this._c].setColor(grid.c2);

                    this._c = this._c - cellsCntX;
                    //any game type except PaintStack
                    if (GameType === 'PaintStack') {
                        if (grid.cell[this._c].isMarked) {
                            actor.markedArea -= (1 / (cellsCntX * cellsCntY)) * 100;
                            grid.cell[this._c].isMarked = false; //mark the cell as not painted
                        }
                    }
                    grid.cell[this._c].setColor(this.color);
                    grid.cell[this._c].setCellType('Enemy');

                }

                break;
            case 'down':
                if (grid.cell[this._c].checkCell(SwipeType, this._c) && grid.cell[this._c + cellsCntX].type !== 'Enemy') {

                    //Handle down Swap
                    grid.cell[this._c].setCellType('Normal');
                    grid.cell[this._c].setColor(grid.c2);

                    this._c = this._c + cellsCntX;
                    //any game type except PaintStack
                    if (GameType === 'PaintStack') {
                        if (grid.cell[this._c].isMarked) {
                            actor.markedArea -= (1 / (cellsCntX * cellsCntY)) * 100;
                            grid.cell[this._c].isMarked = false; //mark the cell as not painted
                        }
                    }
                    grid.cell[this._c].setColor(this.color);
                    grid.cell[this._c].setCellType('Enemy');
                }

                break;
            case 'left':
                if (grid.cell[this._c].checkCell(SwipeType, this._c) && grid.cell[this._c - 1].type !== 'Enemy') {

                    //Handle Left Swap
                    grid.cell[this._c].setCellType('Normal');
                    grid.cell[this._c].setColor(grid.c2);

                    this._c = this._c - 1;
                    //any game type except PaintStack
                    if (GameType === 'PaintStack') {
                        if (grid.cell[this._c].isMarked) {
                            actor.markedArea -= (1 / (cellsCntX * cellsCntY)) * 100;
                            grid.cell[this._c].isMarked = false; //mark the cell as not painted
                        }
                    }
                    grid.cell[this._c].setColor(this.color);
                    grid.cell[this._c].setCellType('Enemy');
                }

                break;
            case 'right':
                if (grid.cell[this._c].checkCell(SwipeType, this._c) && grid.cell[this._c + 1].type !== 'Enemy') {

                    //Handle Right Swap
                    grid.cell[this._c].setCellType('Normal');
                    grid.cell[this._c].setColor(grid.c2);

                    this._c = this._c + 1;
                    //any game type except PaintStack
                    if (GameType === 'PaintStack') {
                        if (grid.cell[this._c].isMarked) {
                            actor.markedArea -= (1 / (cellsCntX * cellsCntY)) * 100;
                            grid.cell[this._c].isMarked = false; //mark the cell as not painted
                        }
                    }
                    grid.cell[this._c].setColor(this.color);
                    grid.cell[this._c].setCellType('Enemy');
                }

                break;
            default:
                break;
        }
    },

    /**
     * Gives the direction which enemy will march
     * @method Enemy#Nextmove
     * @return {string}
     */
    Nextmove: function () {
        var CellsInt = actor._c - this._c;
        var RowsInt = Math.abs(grid.getRow(actor._c) - grid.getRow(this._c));

        //Enemy is ahead you
        if (CellsInt < 0) {
            if (RowsInt > 0) {
                return ('up');
            } else {
                if (this._c > actor._c) {
                    return ('left');
                } else {
                    return ('right');
                }
            }
        }
        //Enemy has the same position with Enemy
        else if (CellsInt === 0) {
            gameOver();
        }
        //Enemy is behind you
        else {
            if (RowsInt > 0) {
                return ('down');
            } else {
                if (this._c > actor._c) {
                    return ('left');
                } else {
                    return ('right');
                }
            }
        }
    },

    /**
     * Make the enemy move towards a direction of your choice.
     * @method Enemy#move
     * @param {string} SwipeType - Direction to move.
     */
    Thrust: function (dir) {
        var z, x, i;
        switch (dir) {
            case 'up':
                z = this._c - cellsCntX;

                for (x = 0; x < cellsCntX; x++) {
                    z = this._c - cellsCntX;
                    if (grid.cell[this._c].checkCell(dir, this._c)) {
                        if (grid.cell[z].type === 'Enemy') {
                            for (i = 0; i < enemy.length; i++) {
                                if (enemy[i]._c === z) {
                                    //enemy[i].isDead = true;
                                    grid.cell[z].type = 'Normal';
                                    enemy.splice(i, 1);
                                    enemyMove.splice(i, 1);
                                    break;
                                }
                            }
                        }
                        this.move(dir);
                    } else {
                        break;
                    }
                }

                break;
            case 'down':
                z = this._c + cellsCntX;

                for (x = 0; x < cellsCntX; x++) {
                    z = this._c + cellsCntX;
                    if (grid.cell[this._c].checkCell(dir, this._c)) {
                        if (grid.cell[z].type === 'Enemy') {
                            for (i = 0; i < enemy.length; i++) {
                                if (enemy[i]._c === z) {
                                    //enemy[i].isDead = true;
                                    grid.cell[z].type = 'Normal';
                                    enemy.splice(i, 1);
                                    enemyMove.splice(i, 1);
                                    break;
                                }
                            }
                        }
                        this.move(dir);
                    } else {
                        break;
                    }
                }

                break;
            case 'left':
                z = this._c - 1;

                for (x = 0; x < cellsCntX; x++) {
                    z = this._c - 1;
                    if (grid.cell[this._c].checkCell(dir, this._c)) {
                        if (grid.cell[z].type === 'Enemy') {
                            for (i = 0; i < enemy.length; i++) {
                                if (enemy[i]._c === z) {
                                    //enemy[i].isDead = true;
                                    grid.cell[z].type = 'Normal';
                                    enemy.splice(i, 1);
                                    enemyMove.splice(i, 1);
                                    break;
                                }
                            }
                        }
                        this.move(dir);
                    } else {
                        break;
                    }
                }

                break;
            case 'right':
                z = this._c + 1;

                for (x = 0; x < cellsCntX; x++) {
                    z = this._c + 1;
                    if (grid.cell[this._c].checkCell(dir, this._c)) {
                        if (grid.cell[z].type === 'Enemy') {
                            for (i = 0; i < enemy.length; i++) {
                                if (enemy[i]._c === z) {
                                    //enemy[i].isDead = true;
                                    grid.cell[z].type = 'Normal';
                                    enemy.splice(i, 1);
                                    enemyMove.splice(i, 1);
                                    break;
                                }
                            }
                        }
                        this.move(dir);
                    } else {
                        break;
                    }
                }

                break;
            default:
                break;
        }
    }

};

Enemy.prototype.constructor = Enemy;

////////////////////////////////////////////////////////////////////////////////
// DEPRECATED ZONE
////////////////////////////////////////////////////////////////////////////////


/*      UPDATE      */


//Enemy.prototype.update = function() {
//  if (this.isDead == true)
//    return null;
//
//  var CellsInt = actor._c - this._c;
//  var RowsInt = Math.abs(grid.getRow(actor._c) - grid.getRow(this._c));
//
//  //Enemy is ahead you
//  if (CellsInt < 0) {
//    if (RowsInt > 0) {
//      this.move('up');
//    } else {
//      if (this._c > actor._c) {
//        this.move('left');
//      } else {
//        this.move('right');
//      }
//    }
//  }
//  //Enemy has the same position with Enemy
//  else if (CellsInt === 0) {
//    gameOver();
//  }
//  //Enemy is behind you
//  else {
//    if (RowsInt > 0) {
//      this.move('down');
//    } else {
//      if (this._c > actor._c) {
//        this.move('left');
//      } else {
//        this.move('right');
//      }
//    }
//  }
//};
