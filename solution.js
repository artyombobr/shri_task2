const solution = function(graph, start, finish)  {
  let nodes = {"dist":{}, "done":{}, "parent":{}};
  
  for(i in graph){ nodes['dist'][i]=Infinity; }
  nodes['dist'][start] = 0;
  for(i in graph){
    let min = -1;
    for(j in graph){
      if ((!nodes['done'][j]) &&((min == -1)||(nodes['dist'][j]<nodes['dist'][min]))) {
        min = j;
      }
    }
    nodes['done'][min] = true;
    for(j in graph[min]) { 
      if ((nodes['dist'][min] + graph[min][j] < nodes['dist'][j])||(nodes['dist'][j] == undefined)){
        nodes['dist'][j] = nodes['dist'][min] + graph[min][j];
        nodes['parent'][j] = min;
      }
    }
  }
  if (nodes['dist'][finish] != Infinity) {
    let path = [finish];
    let parent = finish;
    while(parent != start) {
      parent = nodes['parent'][parent];
      path.unshift(parent);
    }
    return {
    distance: nodes['dist'][finish],
    path: path
  }
  } else {
    console.log('Нет пути');
    return {
      path: -1
    }
  }
  
};
