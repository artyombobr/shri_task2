var graph = {};
var nm = readline().split(' ');
var n = nm[0];
var m = nm[1];

for (var i = 1; i<=n; i++){
    graph[i] = {};
}

for (var i = 1; i <= m; i++) {
	var s = readline().split(' ');
	var a = s[0];
	var b = s[1];
	graph[a][b] = +s[2];
	graph[b][a] = +s[2];
}


const solution = function(graph, start, finish)  {
  var nodes = {"dist":{}, "done":{}, "parent":{}};
  
  for(var i in graph){ 
      nodes['dist'][i]=Infinity;
      
     }
  nodes['dist'][start] = 0;
  
  for(i in graph){
    var min = -1;
    for(var j in graph){
      if ((!nodes['done'][j]) &&((min == -1)||(nodes['dist'][j]<nodes['dist'][min]))) {
        min = j;
      }
    }
   
    nodes['done'][min] = true;
    for(j in graph[min]) { 
      if ((nodes['dist'][min] + graph[min][j] < nodes['dist'][j])||(nodes['dist'][j] === undefined)){
        nodes['dist'][j] = nodes['dist'][min] + graph[min][j];
        //print(nodes['dist'][j]);
        nodes['parent'][j] = min;
      }
    }
  }
  
  if (nodes['dist'][finish] != Infinity) {
      var path = [finish];
      var parent = finish;
      while(parent != start) {
        parent = nodes['parent'][parent];
        path.unshift(parent);
      }
  } else {
      path = [-1];
  }
  return {
    distance: nodes['dist'][finish],
    path: path
  };
}



var path = solution(graph, 1, n).path;
var answer = '';
for (var i = 0; i < path.length; i++) {
	answer = answer + path[i]+ ' ';
}
print(answer);

