import React, { useState } from 'react'
import logo from './img/calculator.png'
import './Calculator.css'
import { Operation } from './CalculatorFunc.d'

const Calculate = () => {
  const [operationStack, setOperationStack] = useState<(Operation | number)[]>(
    []
  )
  const [display, setDisplay] = useState<string>('')

  const pressNumbers = (number: number) => {
    setDisplay(display + number)
  }

  const pressOperation = (operation: Operation) => {
    if (operation === Operation.CLEAR) {
      setOperationStack([])
      setDisplay('')
      return
    }

    if (display) {
      operationStack.push(Number(display))
      setDisplay('')
    }

    if (operation === Operation.EQUAL) {
      handleStack()
      return
    }

    if (operationStack.length > 0) {
      const latest = operationStack[operationStack.length - 1]
      if (typeof latest === 'string') {
        return
      }
    }

    operationStack.push(operation)
  }

  const handleStack = () => {
    let stack = [...operationStack]

    let latest: number | undefined = undefined

    while (stack.length > 0) {
      const current = stack.pop()

      switch (current) {
        case Operation.ADD:
          latest = latest! + (stack.pop() as number)
          break
        case Operation.SUB:
          latest = latest! - (stack.pop() as number)
          break
        case Operation.DIVIDE: // *, /, length == 0 <= .seek()
          break
        case Operation.MULTIPLY:
          break
        default:
          // 55
          if (latest === undefined) latest = current as number

          break
      }
    }

    setOperationStack([])

    setDisplay(`${latest}`)
  }

  const displayLatest = () => {}

  return (
    <div className="container">
      <img src={logo} className="logo"></img>
      <div className="calculator">
        <p id="calc-header">Calculator</p>
        <p id="display">{display}</p>
        <div className={'buttons'}>
          <div className={'left'}>
            <div className={'numbersHolder'}>
              {Array.from(Array(9).keys()).map((_: unknown, index: number) => {
                const number = 9 - index
                return (
                  <button
                    id={`id${number}`}
                    key={number}
                    onClick={() => pressNumbers(number)}
                  >
                    {number}
                  </button>
                )
              })}
            </div>
          </div>
          <div className={'right'}>
            <button
              id="b-divide"
              onClick={() => pressOperation(Operation.DIVIDE)}
            >
              &divide;
            </button>
            <button
              id="b-times"
              onClick={() => pressOperation(Operation.MULTIPLY)}
            >
              &times;
            </button>
            <button id="b-minus" onClick={() => pressOperation(Operation.SUB)}>
              &minus;
            </button>
          </div>
        </div>
        <div>
          <button id="b0" onClick={() => pressNumbers(0)}>
            0
          </button>
          <button id="b-equals" onClick={() => pressOperation(Operation.EQUAL)}>
            =
          </button>
          <button id="b-plus" onClick={() => pressOperation(Operation.ADD)}>
            +
          </button>
          <button id="b-c" onClick={() => pressOperation(Operation.CLEAR)}>
            c
          </button>
        </div>
      </div>
    </div>
  )
}

export default Calculate
