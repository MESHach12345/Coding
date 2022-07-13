public class PlayingCard {
    private int value;
    private char suit;
    private boolean faceDown;

    public PlayingCard(int value, char suit) {
        this.value = value;
        this.suit = suit;
        this.faceDown = false;
    }

    /**
     * Constructor allowing for setting all properties
     * @param value value of card
     * @param suit suit of card
     * @param faceDown is it faced down or not
     */
    
    public PlayingCard(int value, char suit, boolean faceDown) {
        this.value = value;
        this.suit = suit;
        this.faceDown = faceDown;
    }

    public int getValue() {
        return this.value;
    }

    public char getSuit() {
        return this.suit;
    }

    //If Facedown is true, make it false else make it true

    public void flip() {
        if (this.faceDown) { //Why Does this Work
            this.faceDown = false;
        } else {
            this.faceDown = true;
        }
    }

    /**
     * Returns a Representation of the Card
     * [%%%] if face down
     * [V-S] if face up
     */
    
    public String toString() {
        String retString = "[";
        if (this.faceDown) {
            retString += "%%%%";
        } else {
            switch (value) {
                case 1:
                    retString += " A";
                    break;
                case 11:
                    retString += " J";
                    break;
                case 12:
                    retString += " Q";
                    break;
                case 13:
                    retString += " K";
                    break;
                default:
                    retString += ((value<10)? " " + value: value);
            }

            retString +=  "-" + suit;
        }

        retString += "]";

        return retString;
    }
}