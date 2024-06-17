class myHashTable {
  table;
  size;
  constructor() {
    this.table = new Array(11);
    this.size = 0;
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {      
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length;
  }

  set(key, value) {
    const index = this.hash(key);
    this.table[index] = [key, value];
    this.size++;
  }

  get(key) {
    const index = this.hash(key);
    return this.table[index];
  }

  printHashTable() {
    for (let i = 0; i < this.table.length; i++) {
      const bucket = this.table[i];
      if (bucket) {
        console.log(`Bucket ${i}: ${bucket.join(", ")}`);
      } else {
        console.log(`Bucket ${i}: Empty`);
      }
    }
  }
}

(function main() {
  const hs = new myHashTable();
  console.log("hs", hs);
})();