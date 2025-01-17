/*
 * Copyright (C) 2020 The zfoo Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and limitations under the License.
 */

package com.zfoo.tank.gateway;

import com.zfoo.net.core.HostAndPort;
import com.zfoo.net.core.gateway.WebsocketGatewayServer;
import com.zfoo.net.session.Session;
import com.zfoo.net.util.NetUtils;
import com.zfoo.protocol.util.JsonUtils;
import com.zfoo.tank.common.protocol.login.GetPlayerInfoRequest;
import com.zfoo.tank.common.protocol.login.LoginRequest;
import com.zfoo.tank.gateway.server.MyGatewayServer;
import com.zfoo.tank.gateway.server.MyWebsocketGatewayServer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.util.function.BiFunction;

/**
 * @author jaysunxiao
 * @version 1.0
 * @since 2019-11-10 14:21
 */
public class Application {

    /**
     * tcp服务器的默认端口
     */
    public static final int TCP_SERVER_PORT = 16000;

    /**
     * websocket服务器的默认端口
     */
    public static final int WEBSOCKET_SERVER_PORT = 18000;

    public static final HostAndPort GATEWAY_HOST_AND_PORT = HostAndPort.valueOf(NetUtils.getLocalhostStr(), TCP_SERVER_PORT);


    public static void main(String[] args) {
        var context = new ClassPathXmlApplicationContext("application.xml");
        context.registerShutdownHook();

        // tcp网关，启动哪个网关取决于客户端的协议，可以同时启动tcp网关和websocket网关
         var tcpGateway = new MyGatewayServer(HostAndPort.valueOf(NetUtils.getLocalhostStr(), TCP_SERVER_PORT));
         tcpGateway.start();

//         var websocketGateway = new MyWebsocketGatewayServer(HostAndPort.valueOf(NetUtils.getLocalhostStr(), TCP_SERVER_PORT));
//        websocketGateway.start();
    }

}
