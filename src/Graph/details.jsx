import React, { Component } from 'react';

class Details extends Component {
    Switcherr = () => {
        const cardStyle = {
            width: '23%',       
            minHeight: '120px',  
            marginRight: '1%',  
            backgroundColor: 'white',
            padding: '10px',
            borderRadius: '6px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        };

        const rowStyle = {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'stretch',
            backgroundColor: ' #d0bdf4', 
            padding: '10px',
            margin: 0
        };

        switch (this.props.algo) {
            case 0:
                return (
                    <div style={rowStyle}>
                        <div style={cardStyle}>
                            The Fibonacci sequence, in which each number is the sum of the two preceding ones. The sequence
                            commonly starts from 0 and 1.
                        </div>
                        <div style={cardStyle}>
                            N = Nth Fibonacci Number
                        </div>
                        <div style={cardStyle}>
                            function = nCr(n,r)
                        </div>
                        <div style={cardStyle}>
                            Fib(0) = 0 <br />
                            Fib(1) = 1 <br />
                            Fib(n) = Fib(n-1) + Fib(n-2)
                        </div>
                    </div>
                );

            case 1:
                return (
                    <div style={rowStyle}>
                        <div style={cardStyle}>
                            In mathematics, binomial coefficients occur as coefficients in the binomial theorem. They are the
                            coefficient of x^k in (1+x)^n.
                        </div>
                        <div style={cardStyle}>
                            nCr = n! / (k! * (n-k)!)
                        </div>
                        <div style={cardStyle}>
                            function = nCr(n,r)
                        </div>
                        <div style={cardStyle}>
                            nCr(a,a) = 1 <br />
                            nCr(a,0) = 1 <br />
                            nCr(n,r) = nCr(n-1,r-1)+nCr(n-1,r)
                        </div>
                    </div>
                );

            case 2:
                return (
                    <div style={rowStyle}>
                        <div style={cardStyle}>
                            A derangement is a permutation of a set where no element appears in its original position.
                        </div>
                        <div style={cardStyle}>
                            N = Nth Derangement
                        </div>
                        <div style={cardStyle}>
                            function = der(n)
                        </div>
                        <div style={cardStyle}>
                            der(0) = 1 <br />
                            der(1) = 0 <br />
                            der(n) = (n-1) * (der(n-1) + der(n-2))
                        </div>
                    </div>
                );

            default:
                return <b>Henlo</b>;
        }
    }

    render() {
        return <div>{this.Switcherr()}</div>;
    }
}

export default Details;
