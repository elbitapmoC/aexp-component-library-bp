// Tabs.tsx
import React, { useState, type ReactNode } from "react";
import "./styles.css";

// Tabs Component
const Tabs = <T extends string>({
  defaultValue,
  className,
  children,
}: {
  defaultValue: T;
  className?: string;
  children: ReactNode;
}) => {
  const [activeTab, setActiveTab] = useState<T>(defaultValue);

  return (
    <div className={`tabs-container ${className}`} role="tablist">
      {React.Children.map(children, (child) =>
        React.isValidElement(child) && typeof child.type !== "string"
          ? React.cloneElement(child, {
              activeTab,
              setActiveTab,
            } as React.ComponentProps<typeof child.type>)
          : child
      )}
    </div>
  );
};

// TabsList Component
const TabsList = ({ children }: { children: ReactNode }) => {
  return <div className="tabs-list">{children}</div>;
};

// TabsTrigger Component
const TabsTrigger = ({
  value,
  activeTab,
  setActiveTab,
  children,
}: {
  value: string;
  activeTab?: string;
  setActiveTab?: (value: string) => void;
  children: ReactNode;
}) => {
  const isActive = activeTab === value;

  return (
    <button
      type="button"
      className={`tabs-trigger ${isActive ? "active" : ""}`}
      onClick={() => setActiveTab?.(value)}
      role="tab"
      aria-selected={isActive}
    >
      {children}
    </button>
  );
};

// TabsContent Component
const TabsContent = ({
  value,
  activeTab,
  children,
}: {
  value: string;
  activeTab?: string;
  children: ReactNode;
}) => {
  return activeTab === value ? (
    <div className="tabs-content" role="tabpanel">
      {children}
    </div>
  ) : null;
};

export { Tabs, TabsList, TabsTrigger, TabsContent };
