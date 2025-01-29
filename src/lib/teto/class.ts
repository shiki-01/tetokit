
type MinoType = "i" | "o" | "s" | "z" | "j" | "l" | "t"

class Teto {
    private mino: MinoType | null = null;

    constructor(mino: MinoType) {
        this.mino = mino;
    }
}