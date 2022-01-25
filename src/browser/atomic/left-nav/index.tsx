import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { LeftNavWrapper } from "../../components";
import { application_config } from "../../system/start/state/signin/dummy-data";
import {
  StyledList,
  StyledNavLink,
  StyledNavWithChildren,
} from "./left-nav.styles";
const nav_menu = application_config.nav_menus;
const { config, items } = nav_menu;

const LeftNavigation = () => {
  return (
    <LeftNavWrapper>
      {config.is_enabled &&
        items.map(({ application_name, children_items = null, route = "" }) => (
          <menu>
            <StyledList>
              {children_items ? (
                <>
                  <StyledNavWithChildren children_items={children_items}>
                    {application_name}
                  </StyledNavWithChildren>
                  {children_items.map((child_nav: any) => (
                    <menu>
                      <StyledList>
                        <StyledNavLink to={`/${child_nav.route}`}>
                          {child_nav.name}
                        </StyledNavLink>
                      </StyledList>
                    </menu>
                  ))}
                </>
              ) : (
                <h4>
                  <StyledNavLink to={`/${route}`}>
                    {application_name}
                  </StyledNavLink>
                </h4>
              )}
            </StyledList>
          </menu>
        ))}
    </LeftNavWrapper>
  );
};

export default LeftNavigation;
