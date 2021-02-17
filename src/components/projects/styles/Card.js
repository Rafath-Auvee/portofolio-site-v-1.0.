import styled from "styled-components";
// export const Tagline = styled.div`
//   font-size: 3rem;
//   text-align: center;
//   color: white;
// `;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  max-width: 300px;
  word-wrap: break-word;
  background-color: #0d0d0d;
  justify-content: center;
  background-clip: border-box;
  border: 3px solid #01bf71;
  border-radius: 0.25rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);

  overflow: hidden;
  &:hover {
    color: #fff;
    background-color: #000;
    border-radius: 20px;
    border-color: #1e7e34;
    border: 5px solid #01bf71;
    transition: 0.5s;
    transform: translateY(-20px);
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.25rem;
`;

export const Title = styled.h1`
  padding-bottom: 25px;
  color: white;
  font-size: 1.9rem;
  text-align: center;
  font-weight: bold;
  margin: 0;
`;

export const Text = styled.p`
  padding-bottom: 35px;
  font-size: 1rem;
  text-align: center;
  color: #6c757d;
`;

export const Image = styled.img`
  width: 100%;
  height: 50%;
`;

export const Button = styled.button`
  cursor: pointer;
  margin-top: auto;
  width: 50%;
  /* height: 50%; */
  color: #fff;
  background-color: #01bf71;
  border-color: #01bf71;
  display: block;
  font-weight: bold;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  justify-content: center;
  border: 3px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  margin-left: 1rem;
  margin-bottom: 1rem;
  margin-right: 1rem;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:hover {
    color: blue;
    background-color: white;
    border-color: #1e7e34;
  }
`;
