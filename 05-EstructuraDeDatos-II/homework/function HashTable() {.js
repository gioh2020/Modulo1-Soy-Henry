function HashTable() {
    this.hash = hash;
    this.set = set;
    this.get = get;
    this.hasKey = hasKey;
    this.numBuckets = 35;
    this.buckets = [];
  
    function hash(key) {
      let x = key
        .split("")
        .map((el) => el.charCodeAt())
        .reduce((a, b) => a + b);
      return x % this.numBuckets;
    }
  
    function set(key, value) {
      if (typeof key !== "string") throw TypeError("Keys must be strings");
      let i = this.hash(key);
      // let datos = { key: i, value: value };
  
      if (this.buckets[i] === undefined) {
        this.buckets[i] = {};
      }
  
      this.buckets[i][key] = value;
    }
  
    function get(key) {
      // if (typeof key !== "string") throw new TypeError("Keys must be strings");
      let i = this.hash(key);
      return this.buckets[i][key];
      // for (let i = 0; i < this.buckets[indice].length; i++) {
      //   return this.buckets[indice][i].key === key
      //     ? this.buckets[indice][i].value
      //     : false;
      // }
    }
    function hasKey(key) {
      return !!this.get(key);
  
      //return this.buckets[i].hasOwnProperty(key)
    }
  }