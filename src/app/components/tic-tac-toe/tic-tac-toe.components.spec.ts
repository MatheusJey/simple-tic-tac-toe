import { TicTacToeComponent } from "./tic-tac-toe.component";

describe('test ai_app', function () {
    test('makeMove updates board and currentPlayer', () => {
        const game = new TicTacToeComponent();
        game.makeMove(0, 0);
        expect(game.board[0][0]).toBe('X');
        expect(game.currentPlayer).toBe('O');
        
        game.makeMove(1, 1);
        expect(game.board[1][1]).toBe('O');
        expect(game.currentPlayer).toBe('X');
        
        game.makeMove(0, 0);
        expect(game.board[0][0]).toBe('X'); // should not update board if spot is already taken
        expect(game.currentPlayer).toBe('X'); // should not update currentPlayer if spot is already taken
        });
 });
