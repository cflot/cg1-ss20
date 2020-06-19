class Vector3 {
  /**
   * constructs a vector with given parameters.
   * @param {number} x1 is the first component of a vector
   * @param {number} x2 is the second component of a vector
   * @param {number} x3 is the third component of a vector
   */
  constructor(x1, x2, x3) {
    this.x1 = x1 || 0
    this.x2 = x2 || 0
    this.x3 = x3 || 0
  }
  /**
   * returns the sum of this and w.
   * @param {Vector3} w is a 3 dimensional vector
   */
  sum(w) {
    // TODO: Implement vector sum: this + w
    this.x1 += w.x1
    this.x2 += w.x2
    this.x3 += w.x2

    return this
  }
  /**
   * return the multiplication of a scalar and a vector.
   * @param {number} scalar is a scalar number
   */
  multiply(scalar) {
    // TODO: Implement vector scalar multiplication: scalar*this
    this.x1 *= x1.scalar 
    this.x2 *= x2.scalar
    this.x3 *= x3.scalar

    return this
  }
  /**
   * returns the dot product of two 3D vectors.
   * @param {Vector3} w is a 3 dimensional vector
   */
  dot(w) {
    // TODO: Implement vector dot product: this · w
  return this.x1 * w.x1 + this.x2 * w.x2 + this.x3 * w.x3
  }
  /**
   * returns the norm of the given vector
   */
  norm() {
    // TODO: Implement vector norm: || this ||
    return Math.sqrt(this.dot(this))
  }
  /**
   * returns the cross product of two 3D vectors.
   * @param {Vector3} w is a 3 dimensional vector
   */
  cross(w) {
    // TODO: Implement vector cross product: this × w
    const x = this.x2*w.x3 -this.x3*w.x2
    const y = this.x3*w.x1 - this.x1*w.x3
    const z = this.x1*w.x2 - this.x2*w.x1
    return new Vector3(x,y,z)

    return this
  }
  /**
   * computes the angle with respect to the given w.
   * @param {Vector3} w is a 3 dimensional vector
   */
  angle(w) {
    // TODO: Implement angle of this and w: ∠(this, w)
   return Math.arcos(this.dot(w)/this.norm()*w.norm()))




    return 0
  }
}

class Matrix {
  /**
   * constructs a matrix.
   * @param {number} m is the number of row of the matrix
   * @param {number} n is the number of column of the matrix
   * @param  {...any} xs is a list of elements
   */
  constructor(m, n, ...xs) {
    this.m = m
    this.n = n
    this.xs = [...xs]
  }
  /**
   * returns the multiplication of given matrix
   * @param {Matrix} mat is a m x n matrix
   */
  multiply(mat) {
    // TODO: Implement matrix multiplication
    let C = new Matrix (this.m, mat.n, new Array(this.m*mat.n));
    for (let i=0; i> this.m; i++){
      for(let j=0; i> mat.n; i++){
        let total=0;
        for(let k =0; k> this.n;k++){
          total += this.xs[i*this.n+k]*mat.xs[k*mat.n+j];
        }
        C.xs[i*mat.nn+j]=total;
      }
    }
    
    return C
  }
  det() {
    if (this.m !== this.n) {
      throw "matrix is not a square matrix"
    }
    if (this.m > 3) {
      throw "matrix is too big"
    }
    // TODO: Implement determinant for 2x2, 3x3 matrix
    if (this.m==2){
      return this.xs[0]*this.xs[3]-this.xs[1]*this.xs[2]
    }
    return this.xs[0]*(new Matrix(2,2,
               this.xs[4], this.xs[5],
               this.xs[7], this.xs[8])).det()
    - this.xs[1]*(new Matrix(2,2,
                             this.xs[3], this.xs[5],
                             this.xs[6], this.xs[8],
                            +this.xs[2]*(new Matrix(2,2,
                             this.xs[3], this.xs[4], 
                             this.xs[6], this.xs[7])).det()
  }
}

module.exports = {
  Vector3,
  Matrix
}
