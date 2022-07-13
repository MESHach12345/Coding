import java.util.ArrayList;

/**
 * Our Goal is to make a Working Deck of Cards
 */

public class Source {
    public static void main(String[] args) {
        PlayingCardDeck deck = new PlayingCardDeck(52);
        
        char[] suits = {'H', 'D', 'C', 'S'};

        for(int s = 0; s<suits.length; s++) {
            for (int v = 1; v<14; v++) {
                PlayingCard newcard = new PlayingCard(v, suits[s], false);
                deck.addCardToBottom(newcard);
            }
        }
        System.out.println(deck);
    }
}

