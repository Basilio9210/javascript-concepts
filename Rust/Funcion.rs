
/*Ejemplo 1: d en (2,1), o en (1,1), g en (0,1), hacia arriba, así que devuelve true.
Ejemplo 2: la g en (0,0) no tiene una o en ninguna de sus direcciones, así que devuelve false */


fn wordSearch(board: Vec<Vec<char>>, targetWord: String) -> bool {
    if targetWord.is_empty() {
        return true;
    }
    let rows = board.len();
    if rows == 0 {
        return false;
    }
    let cols = board[0].len();
    if cols == 0 {
        return false;
    }

    let word: Vec<char> = targetWord.chars().collect();
    let len = word.len();

    // 8 directions
    let directions: [(isize, isize); 8] = [
        (0, 1),   // right
        (0, -1),  // left
        (1, 0),   // down
        (-1, 0),  // up
        (1, 1),   // down-right
        (1, -1),  // down-left
        (-1, 1),  // up-right
        (-1, -1), // up-left
    ];

    for r in 0..rows {
        for c in 0..cols {
            if board[r][c] != word[0] {
                continue;
            }
            for &(dr, dc) in &directions {
                let mut rr = r as isize;
                let mut cc = c as isize;
                let mut matched = true;
                for k in 1..len {
                    rr += dr;
                    cc += dc;
                    if rr < 0 || cc < 0 || rr >= rows as isize || cc >= cols as isize {
                        matched = false;
                        break;
                    }
                    if board[rr as usize][cc as usize] != word[k] {
                        matched = false;
                        break;
                    }
                }
                if matched {
                    return true;
                }
            }
        }
    }

    false
}

fn main() {
    // Example 1: should print "true" (d -> o -> g upwards)
    let board1 = vec![
        vec!['f', 'g', 'a', 'b'],
        vec!['b', 'o', 't', 't'],
        vec!['e', 'd', 'x', 'p'],
    ];
    let target1 = "dog".to_string();
    println!("{}", wordSearch(board1, target1)); // true

    // Example 2: should print "false"
    let board2 = vec![
        vec!['g', 'h', 'c'],
        vec!['f', 'm', 'o'],
    ];
    let target2 = "go".to_string();
    println!("{}", wordSearch(board2, target2)); // false
}