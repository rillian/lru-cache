var searchIndex = {};
searchIndex['lru-cache'] = {"items":[[0,"","lru-cache","A cache that holds a limited number of key-value pairs. When the\ncapacity of the cache is exceeded, the least-recently-used\n(where \"used\" means a look-up or putting the pair into the cache)\npair is automatically removed.",null,null],[3,"LruCache","","An LRU cache.",null,null],[3,"Iter","","An iterator over a cache's key-value pairs in least- to most-recently-used order.",null,null],[3,"IterMut","","An iterator over a cache's key-value pairs in least- to most-recently-used order with mutable\nreferences to the values.",null,null],[11,"new","","Creates an empty cache that can hold at most `capacity` items.",0,{"inputs":[{"name":"lrucache"},{"name":"usize"}],"output":{"name":"lrucache"}}],[11,"with_hash_state","","Creates an empty cache that can hold at most `capacity` items with the given hash state.",0,{"inputs":[{"name":"lrucache"},{"name":"usize"},{"name":"s"}],"output":{"name":"lrucache"}}],[11,"insert","","Inserts a key-value pair into the cache. If the key already existed, the old value is\nreturned.",0,{"inputs":[{"name":"lrucache"},{"name":"k"},{"name":"v"}],"output":{"name":"option"}}],[11,"get","","Returns the value corresponding to the given key in the cache.",0,{"inputs":[{"name":"lrucache"},{"name":"k"}],"output":{"name":"option"}}],[11,"remove","","Removes the given key from the cache and returns its corresponding value.",0,{"inputs":[{"name":"lrucache"},{"name":"k"}],"output":{"name":"option"}}],[11,"capacity","","Returns the maximum number of key-value pairs the cache can hold.",0,{"inputs":[{"name":"lrucache"}],"output":{"name":"usize"}}],[11,"set_capacity","","Sets the number of key-value pairs the cache can hold. Removes\nleast-recently-used key-value pairs if necessary.",0,{"inputs":[{"name":"lrucache"},{"name":"usize"}],"output":null}],[11,"len","","Returns the number of key-value pairs in the cache.",0,{"inputs":[{"name":"lrucache"}],"output":{"name":"usize"}}],[11,"is_empty","","Returns `true` if the cache contains no key-value pairs.",0,{"inputs":[{"name":"lrucache"}],"output":{"name":"bool"}}],[11,"clear","","Removes all key-value pairs from the cache.",0,{"inputs":[{"name":"lrucache"}],"output":null}],[11,"iter","","Returns an iterator over the cache's key-value pairs in least- to most-recently-used order.",0,{"inputs":[{"name":"lrucache"}],"output":{"name":"iter"}}],[11,"iter_mut","","Returns an iterator over the cache's key-value pairs in least- to most-recently-used order\nwith mutable references to the values.",0,{"inputs":[{"name":"lrucache"}],"output":{"name":"itermut"}}],[11,"extend","","",0,{"inputs":[{"name":"lrucache"},{"name":"t"}],"output":null}],[11,"fmt","","",0,{"inputs":[{"name":"lrucache"},{"name":"formatter"}],"output":{"name":"result"}}],[6,"Item","","",null,null],[6,"IntoIter","","",null,null],[6,"Item","","",null,null],[6,"IntoIter","","",null,null],[11,"clone","","",0,{"inputs":[{"name":"lrucache"}],"output":{"name":"lrucache"}}],[11,"clone","","",1,{"inputs":[{"name":"iter"}],"output":{"name":"iter"}}],[6,"Item","","",null,null],[11,"next","","",1,{"inputs":[{"name":"iter"}],"output":{"name":"option"}}],[11,"size_hint","","",1,null],[11,"next_back","","",1,{"inputs":[{"name":"iter"}],"output":{"name":"option"}}],[6,"Item","","",null,null],[11,"next","","",2,{"inputs":[{"name":"itermut"}],"output":{"name":"option"}}],[11,"size_hint","","",2,null],[11,"next_back","","",2,{"inputs":[{"name":"itermut"}],"output":{"name":"option"}}]],"paths":[[3,"LruCache"],[3,"Iter"],[3,"IterMut"]]};
initSearch(searchIndex);
