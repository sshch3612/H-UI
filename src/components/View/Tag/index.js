import React from "react";
import Tag from "./Tag";
import { Whitespace, Wingblank, ListItem, Flex } from "../../Layout";
import { Toast } from "../../Operate";

export default props => {
  return (
    <div className="page-content">
      <Whitespace>
        <Wingblank>空心标签</Wingblank>
      </Whitespace>
      <Whitespace>
        <Wingblank>
          <Flex>
            <Tag shape={"ellipse"}>标签</Tag>
            <Tag>标签</Tag>
            <Tag shape={"ellipse"} border>
              标签
            </Tag>
            <Tag border>标签</Tag>
          </Flex>
        </Wingblank>
      </Whitespace>
      <Whitespace>
        <Wingblank>实心标签</Wingblank>
      </Whitespace>
      <Whitespace>
        <Wingblank>
          <Flex>
            <Tag shape={"ellipse"}>标签</Tag>
            <Tag>标签</Tag>
            <Tag shape={"ellipse"} fill>
              标签
            </Tag>
            <Tag fill>标签</Tag>
          </Flex>
        </Wingblank>
      </Whitespace>
      <Whitespace>
        <Wingblank>点击事件</Wingblank>
      </Whitespace>
      <Whitespace>
        <Wingblank>
          <Flex>
            <Tag
              shape={"ellipse"}
              onClick={() => {
                Toast.info("您点击了我");
              }}
            >
              tag-1
            </Tag>
            <Tag
              onClick={() => {
                Toast.info("您点击了我");
              }}
            >
              tag-2
            </Tag>
            <Tag
              shape={"ellipse"}
              fill
              onClick={() => {
                Toast.info("您点击了我");
              }}
            >
              tag-3
            </Tag>
            <Tag
              fill
              onClick={() => {
                Toast.info("您点击了我");
              }}
            >
              tag-4
            </Tag>
          </Flex>
        </Wingblank>
      </Whitespace>
      <Whitespace>
        <Wingblank>小标签</Wingblank>
      </Whitespace>
      <Whitespace>
        <Wingblank>
          <Flex>
            <Tag shape={"ellipse"} size={'small'}>标签</Tag>
            <Tag size={'small'}>标签</Tag>
            <Tag shape={"ellipse"} border size={'small'}>
              标签
            </Tag>
            <Tag border size={'small'}>标签</Tag>
          </Flex>
        </Wingblank>
      </Whitespace>
    </div>
  );
};
