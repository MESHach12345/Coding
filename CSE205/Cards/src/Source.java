import java.util.ArrayList;

/**
 * Our Goal is to make a Working Deck of Cards
 */

public class Source {
    public static void main(String[] args) {
        ArrayList<PlayingCard> test = new ArrayList<PlayingCard>();
        char[] suits = {'H', 'D', 'C', 'S'};

        for (int s = 0; s < suits.length; s++) {
            for (int v = 1; v < 14; v++) {
                PlayingCard newCard = new PlayingCard(v, suits[s]);
                test.add(newCard);
            }
        }

        for (PlayingCard card : test) {
            System.out.println(card);
        }
    }
}