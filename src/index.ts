import crypto from "crypto";

interface IBlockShape {
    hash: string
    prevHash: string
    height: number
    data: string
}

class Block implements IBlockShape {
    public hash: string;

    constructor(
        public prevHash: string,
        public height: number,
        public data: string
    ) {
        this.hash = Block.calculateHash(prevHash, height, data);
    }

    static calculateHash(
        prevHash: string,
        height: number,
        data: string
    ) {
        const toHash = `${prevHash}${height}${data}`;
        return crypto.createHash("sha256")
            .update(toHash)
            .digest("hex");
    }
}

class Blockchain {
    private blocks: Block[];

    constructor() {
        this.blocks = [];
    }

    private getPrevHash() {
        if (this.blocks.length === 0) return "";
        return this.blocks[this.blocks.length - 1].hash;
    }

    public addBlock(data: string) {
        const newBlock = new Block(this.getPrevHash(), this.blocks.length + 1, data);
        this.blocks.push(newBlock);
    }

    public getBlocks() {
        // 누구나 배열에 push 할수 있는 점을 방지하기 위해 새 배열을 만들어서 반환한다
        return [...this.blocks];
    }
}

const blockchain = new Blockchain();
blockchain.addBlock("First one");
blockchain.addBlock("Second one");
blockchain.addBlock("Third one");

console.log(blockchain.getBlocks());
