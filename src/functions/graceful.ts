export function isGraceful(mat: number[][]): boolean{
    let edges: boolean[] = [];
    for(let i = 0; i < mat.length; i++){
        edges[i] = true;
    }
    for(let r = 0; r < mat.length; r++){
        for(let c = 0; c < r; c++){
            if(mat[r][c] === 0){continue;}
            else{
                if(edges[Math.abs(r-c) - 1]){
                    edges[Math.abs(r-c) - 1] = false;
                }
                else{
                    return false;
                }
            }
        }
    }
    let t: boolean = false;
    for(let i = 0; i < edges.length; i++){
        if(!edges[i] && t){
            return false;
        }
        else if(edges[i]){
            t = true;
        }
    }
    return true;
}