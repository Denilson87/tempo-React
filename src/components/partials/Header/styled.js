import styled from 'styled-components';

export const Area = styled.div`
.MuiAppBar-colorPrimary {
    color: #F5F5F5;
    background-color: #3094d0;
}
.city--maputo{
    color: #FFF;
    font-weight:500;
}
.maputo--info{
    display:flex;
    align-items:center;
    justify-content:center;
    
    .icon{
    margin-bottom: 10px
    }
    .temp--maputo{
        margin-left: 15px;
        color: #FFF;
        font-weight:700;
    }
    .summary--maputo{
        margin-left: 30px;
        color: #F5F5F5;
    }
    .date--maputo{
        color: #F5F5F5;
    }
}

ul{
    color: #F5F5F5;
    display:flex;
    margin:0;
    padding:10px;
    list-style:none;
}
ul li{
    font-weight:500;
    padding: 0px 10px;
}

@media only screen and (max-width:470px){
    ul {
        display:block;
        text-align:center;
    }
    ul li{
        padding: 10px 0px;
    }
}
`