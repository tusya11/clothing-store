import { useEffect, useState } from "react";
import clsx from "clsx";
import Styles from "./PayCard.module.scss";

export const PayCard = ({ products }) => {
  const [startSum, setStartSum] = useState(0);
  const [endSum, setEndSum] = useState(0);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    if (products?.length > 0) {
      let sum = 0;

      products?.forEach((element) => {
        sum += element.price;
      });

      const endSum = (sum / 100) * 80;
      const discount = sum - endSum;

      setStartSum(sum.toFixed(2));
      setEndSum(endSum.toFixed(2));
      setDiscount(discount.toFixed(2));
    }
  }, [products]);

  return (
    <div className={Styles.wrapper}>
      <div className={Styles.content_card}>
        <div className={Styles.block}>
          <span className={Styles.text_block}>Select item:</span>
          <span className={Styles.value}>{products.length}</span>
        </div>
        <div className={Styles.block}>
          <span className={Styles.text_block}>Subtotal:</span>
          <span className={Styles.value}>$ {startSum}</span>
        </div>
        <div className={Styles.block}>
          <span className={Styles.text_block}>Discount (%20):</span>
          <span className={Styles.value}>$ {discount}</span>
        </div>
        <div className={clsx(Styles.block, Styles.total_value)}>
          <span className={Styles.text_block}>Total: </span>
          <span className={Styles.total_sum}>$ {endSum}</span>
        </div>
      </div>
    </div>
  );
};
