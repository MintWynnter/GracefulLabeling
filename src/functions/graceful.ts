export function isGraceful(mat: number[][]): boolean{
    let edges: boolean[] = [];
    for(let i = 0; i < mat.length; i++){
        edges[i] = true;
    }
    for(let r = 0; r < mat.length; r++){
        for(let c = 0; c < r; c++){
            if(mat[r][c] === 0){continue;}
            if(!(Math.abs(r-c) === mat[r][c])){return false;}
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
    return true;
}