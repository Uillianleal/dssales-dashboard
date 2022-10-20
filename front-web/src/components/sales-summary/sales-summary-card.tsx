import React from 'react';
import './styles.css';

type Props = {
  value: number;
  label: string;
  icon: React.ReactNode;
};

function SalesSummaryCard({ value, label, icon }: Props) {
  return (
    <div className="sales-sammary-card base-card">
      {icon}
      <h3 className="sales-sammary-card-value">{value}</h3>
      <span className="sales-sammary-card-label">{label}</span>
    </div>
  );
}

export default SalesSummaryCard;
