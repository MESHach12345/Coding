/**
 * Properties:
 *  cards: PlayingCard[] - array of PlayingCards
 *  cardCount: int
 *  maxSize: int // in case our user wants to fill the deck with a different probability distribution
 *  
 * 
 * Methods:
 * shuffle()
 * sort()
 * drawFromTop(): PlayingCard
 *      drawFromBottom: PlayingCard
 *      drawFromMiddle(index: int): PlayingCard
 * addCardToTop()
 * addCardToBottom()
 * findAndDraw(card:PlayingCard): PlayingCard
 * inDeck(card:PlayingCard): boolean
 * 
 * //Confirm Card exists in Deck
 * contains(value:int): boolean
 * contains(value:int, suit: char): boolean
 * indexOf(value:int): boolean
 * 
 * findAndRemove(value:int): PlayingCard
 * 
 */

public class PlayingCardDeck {
    private PlayingCard[] cards;
    private int cardCount; 
    private int maxSize;

    /**
     * Default Constructor builds a Standard "Deck of 52 Cards"
     */
    public PlayingCardDeck() {
        initStandardDeck();
    }

    /**
     * Constructor prepares a deck to be filled but does not fill it. Deck will be empty
     * @param maxSize size of the deck
     */
    public PlayingCardDeck(int maxSize) {
        cardCount = 0;
        this.maxSize = maxSize;
        cards = new PlayingCard[maxSize];
    }

    public void addCardToTop(PlayingCard newCard) throws IllegalStateException {
        if (cardCount == maxSize) {
            throw new IllegalStateException("Can't Add Card to Full Deck");
        }
        
        cards[cardCount] = newCard;
        cardCount++;
    }

    public void addCardToBottom(PlayingCard newCard) throws IllegalStateException {
        if (cardCount == maxSize) {
            throw new IllegalStateException("Can't Add Card to Full Deck");
        }
    }

    private void initStandardDeck() {
        cards = null; //Doing this to trigger the garbage collector
        cards = new PlayingCard[52];
        cardCount = 0;
        maxSize = 52;

        char[] suits = {'H', 'D', 'C', 'S'};

        for (int s=0; s< suits.length; s++) {
            for (int v=1; v<14; v++) {
                PlayingCard newCard = new PlayingCard(v, suits[s], false);
                cards[cardCount] = newCard;
                cardCount++;
            }
        }
    }

    @Override
    public String toString() {
        String retString = "[[ ";
        for (int i = 0; i<cardCount; i++) {
            retString += cards[i].toString();
        }

        retString += " ]]";

        return retString;
    }
}