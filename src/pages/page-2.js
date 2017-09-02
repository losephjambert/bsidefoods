// import React from 'react'
// import Link from 'gatsby-link'

// const FoodItem = ({ node }) =>
//   <div key={node.id}>
//     <div>{node.name}</div>
//     <div>${node.price}</div>
//     <div>{ node.ingredients.map(( ingredient, i) => <li key={i}>{ ingredient }</li> )}</div>
//     <div>{ node.labels.map(( label, i) => <div key={i}>{ label.label }</div> )}</div>
//   </div>

// const DrinkItem = ({ node }) =>
//   <div key={node.id}>
//     <div>{node.name}</div>
//     <div>${node.price}</div>
//   </div>

// class SecondPage extends React.Component {
//   render() {
//     const foodItem = this.props.data.allContentfulFood.edges
//     const drinkItem = this.props.data.allContentfulDrink.edges
//     console.log(drinkItem)
//     return (
//       <div>
//         <div>Food</div>
//         <div>
//           { foodItem.map(( {node}, i) => <FoodItem key={i} node={node} /> )}
//         </div>
//         <div>Drink</div>
//         <div>~~~~~~~~~~~~~~~~~~~~~</div>
//         <div>
//           { drinkItem.map(( {node}, i) => <DrinkItem key={i} node={node} /> )}
//         </div>
//       </div>
//     )
//   }
// }

// export default SecondPage

// export const pageQuery = graphql`
//   query PageQuery {
//     allContentfulFood{
//       edges {
//         node{
//           id
//           name
//           price
//           ingredients
//           labels{
//             label
//           }
//         }
//       }
//     }
//     allContentfulDrink{
//       edges {
//         node{
//           id
//           name
//           price
//         }
//       }
//     }
//   }
// `
